import { routeAnimation } from './../router-animation';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

import {
    IQueuedTrack,
    IPagedResult
} from '../models';
import {
    AudioZoneService,
    IAudioZone,
    UserInfoService,
    SignalRService,
    QueueService
} from '../api';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'pm-queue',
    templateUrl: 'queue.component.html',
    styleUrls: ['queue.component.scss'],
    animations: [ routeAnimation ]
})
export class QueueComponent implements OnInit, OnDestroy {
    @HostBinding('@routerTransition') true;
    public queuedTracks$: Observable<IQueuedTrack[]>;
    public loading = true;
    private _destroyed$: Subject<any> = new Subject<any>();
    private _activeZone: string;

    constructor (
        private _queueService: QueueService,
        private _signalRService: SignalRService,
        private _audioZoneService: AudioZoneService
    ) { }

    public ngOnInit() {
        this.queuedTracks$ = this._queueService.getAllQueuedTracks()
            .do(() => {
                this.loading = false;
            });

        this._audioZoneService.getCurrentZone()
            .takeUntil(this._destroyed$)
            .subscribe(zone => {
                this.changeZone(zone.path);
            });
    }

    public ngOnDestroy() {
        this._destroyed$.next();
        this.closeHubConnection();
    }

    changeZone(zone: string) {
        if (this._activeZone) {
            this.closeHubConnection();
        }

        this._activeZone = zone;
        this.openHubConnection();
    }

    private openHubConnection() {
        this._signalRService.initializeHub(this._activeZone);
    }

    private closeHubConnection() {
        this._signalRService.closeHubConnection();
    }

    public likeTrack(queuedTrack: IQueuedTrack) {
        queuedTrack.LikeCount++;
        this._signalRService.likeTrack(queuedTrack.Id);
    }

    public vetoTrack(queuedTrack: IQueuedTrack) {
        queuedTrack.VetoCount++;
        this._signalRService.vetoTrack(queuedTrack.Id);
    }
}
