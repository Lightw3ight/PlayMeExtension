import { Component, OnInit } from '@angular/core';
import { MdTabChangeEvent } from '@angular/material';

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
    styleUrls: ['history.component.scss']
})
export class HistoryComponent implements OnInit {
    history: IQueuedTrack[] = [];
    userHistory: IQueuedTrack[] = [];
    requestHistory: IQueuedTrack[] = [];
    loading = false;

    public get noHistoryResults(): boolean {
        return !onload && this.history.length === 0;
    }

    public get noRequestHistoryResults(): boolean {
        return !onload && this.requestHistory.length === 0;
    }

    public get noUserHistoryResults(): boolean {
        return !onload && this.userHistory.length === 0;
    }

    constructor(private _queueService: QueueService) { }

    ngOnInit() {
        this.loadFullHistory();
    }

    loadFullHistory() {
        this.history = [];
        this.loading = true;
        this._queueService.getHistory().then((response: IPagedResult<IQueuedTrack>) => {
            this.history = response.PageData;
            this.loading = false;
        });
    }

    loadRequestHistory() {
        this.requestHistory = [];
        this.loading = true;
        this._queueService.getRequestedHistory().then((response: IPagedResult<IQueuedTrack>) => {
            this.requestHistory = response.PageData;
            this.loading = false;
        });
    }

    loadUserHistory() {
        this.userHistory = [];
        this.loading = true;
        this._queueService.getMyHistory().then((response: IPagedResult<IQueuedTrack>) => {
            this.userHistory = response.PageData;
            this.loading = false;
        });
    }

    onActiveTabChanged(args: MdTabChangeEvent) {
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
