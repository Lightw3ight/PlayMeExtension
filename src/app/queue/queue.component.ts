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


//import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	selector: 'app-queue',
	templateUrl: 'queue.component.html',
	styleUrls: ['queue.component.css']
})
export class QueueComponent implements OnInit {
	queuedTracks: IQueuedTrack[];

	constructor(private _queueService: QueueService) { }

	ngOnInit() {
		this._queueService.getAllQueuedTracks().then(tracks =>{
		    this.queuedTracks = tracks;
		})
	}
}
