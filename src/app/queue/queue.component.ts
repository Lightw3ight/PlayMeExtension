import { takeUntil, tap } from 'rxjs/operators';
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

    public ngOnInit () {
        this.queuedTracks$ = this._queueService.getAllQueuedTracks().pipe(
            tap(() => {
                this.loading = false;
            }));
    }

    public ngOnDestroy () {
        this._destroyed$.next();
    }

    public likeTrack (queuedTrack: IQueuedTrack) {
        queuedTrack.LikeCount++;
        this._signalRService.likeTrack(queuedTrack.Id);
    }

    public vetoTrack (queuedTrack: IQueuedTrack) {
        queuedTrack.VetoCount++;
        this._signalRService.vetoTrack(queuedTrack.Id);
    }

    public trackByFn (index: number, item) {
        return index;
    }
}
