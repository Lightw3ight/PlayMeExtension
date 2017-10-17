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

@Component({
    selector: 'app-history',
    templateUrl: 'history.component.html',
    styleUrls: ['history.component.scss'],
    animations: [ routeAnimation ]
})
export class HistoryComponent implements OnInit {
    history: IQueuedTrack[] = [];
    userHistory: IQueuedTrack[] = [];
    requestHistory: IQueuedTrack[] = [];
    loading = false;
    @HostBinding('@routerTransition') animate = true;

    public get noHistoryResults(): boolean {
        return !this.loading && this.history.length === 0;
    }

    public get noRequestHistoryResults(): boolean {
        return !this.loading && this.requestHistory.length === 0;
    }

    public get noUserHistoryResults(): boolean {
        return !this.loading && this.userHistory.length === 0;
    }

    constructor(private _queueService: QueueService) { }

    ngOnInit() {
        this.loadFullHistory();
    }

    loadFullHistory() {
        this.history = [];
        this.loading = true;
        this._queueService.getHistory().subscribe((response: IPagedResult<IQueuedTrack>) => {
            this.history = response.PageData;
            this.loading = false;
        });
    }

    loadRequestHistory() {
        this.requestHistory = [];
        this.loading = true;
        this._queueService.getRequestedHistory().subscribe((response: IPagedResult<IQueuedTrack>) => {
            this.requestHistory = response.PageData;
            this.loading = false;
        });
    }

    loadUserHistory() {
        this.userHistory = [];
        this.loading = true;
        this._queueService.getMyHistory().subscribe((response: IPagedResult<IQueuedTrack>) => {
            this.userHistory = response.PageData;
            this.loading = false;
        });
    }

    onActiveTabChanged(args: MatTabChangeEvent) {
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
}
