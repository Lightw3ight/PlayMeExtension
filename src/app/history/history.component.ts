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
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-history',
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

    ngOnInit() {
        this.loadFullHistory();
    }

    loadFullHistory() {
        this.loading = true;
        this.history$ = this._queueService.getHistory()
            .map(data => data.PageData)
            .do(() => {
                this.loading = false;
            });
    }

    loadRequestHistory() {
        this.loading = true;
        this.requestHistory$ = this._queueService.getRequestedHistory()
            .map(data => data.PageData)
            .do(() => {
                this.loading = false;
            });
    }

    loadUserHistory() {
        this.loading = true;
        this.userHistory$ = this._queueService.getMyHistory()
            .map(data => data.PageData)
            .do(() => {
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
