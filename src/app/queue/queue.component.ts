import { routeAnimation } from './../router-animation';
import { Component, OnInit, HostBinding } from '@angular/core';

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
    styleUrls: ['queue.component.scss'],
    animations: [ routeAnimation ]
})
export class QueueComponent implements OnInit {
    queuedTracks: IQueuedTrack[];
    loading = true;
    @HostBinding('@routerTransition') animate = true;

    constructor(private _queueService: QueueService) { }

    ngOnInit() {
        this._queueService.getAllQueuedTracks().subscribe((tracks: IQueuedTrack[]) => {
            this.queuedTracks = tracks;
            this.loading = false;
        });
    }
}
