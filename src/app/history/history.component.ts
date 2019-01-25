import { routeAnimation } from './../router-animation';
import { Component, OnInit, HostBinding } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

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
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'pm-history',
    templateUrl: 'history.component.html',
    styleUrls: ['history.component.scss'],
    animations: [ routeAnimation ]
})
export class HistoryComponent implements OnInit {
    public history$: Observable<IQueuedTrack[]>;
    public userHistory$: Observable<IQueuedTrack[]>;
    public requestHistory$: Observable<IQueuedTrack[]>;
    public loading = false;
    @HostBinding('@routerTransition') private _animate = true;

    constructor (
        private _queueService: QueueService
    ) { }

    public ngOnInit () {
        this.loadFullHistory();
    }

    private loadFullHistory () {
        this.loading = true;
        this.history$ = this._queueService.getHistory().pipe(
            map(data => data.PageData),
            tap(() => {
                this.loading = false;
            }));
    }

    private loadRequestHistory () {
        this.loading = true;
        this.requestHistory$ = this._queueService.getRequestedHistory().pipe(
            map(data => data.PageData),
            tap(() => {
                this.loading = false;
            }));
    }

    private loadUserHistory () {
        this.loading = true;
        this.userHistory$ = this._queueService.getMyHistory().pipe(
            map(data => data.PageData),
            tap(() => {
                this.loading = false;
            }));
    }

    public onActiveTabChanged (args: MatTabChangeEvent) {
        switch (args.tab.textLabel) {
            case 'Requested':
                this.loadRequestHistory();
                break;
            case 'Mine':
                this.loadUserHistory();
                break;
            default :
                this.loadFullHistory();
                break;
        }
    }

    public trackByFn (index: number, item) {
        return index;
    }
}
