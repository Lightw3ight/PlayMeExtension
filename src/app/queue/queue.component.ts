import { Component, OnInit } from '@angular/core';

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
    selector: 'pm-queue',
    templateUrl: 'queue.component.html',
    styleUrls: ['queue.component.scss']
})
export class QueueComponent implements OnInit {
    queuedTracks: IQueuedTrack[];
    loading = true;

    constructor(private _queueService: QueueService) { }

    ngOnInit() {
        this._queueService.getAllQueuedTracks().then((tracks: IQueuedTrack[]) => {
            this.queuedTracks = tracks;
            this.loading = false;
        });
    }
}
