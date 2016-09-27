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
	selector: 'app-history',
	templateUrl: 'history.component.html',
	styleUrls: ['history.component.css']
})
export class HistoryComponent implements OnInit {
	history: IQueuedTrack[] = [];
	userHistory: IQueuedTrack[] = [];
	requestHistory: IQueuedTrack[] = [];
	loading = false;


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
		})
	}

	loadRequestHistory() {
		this.requestHistory = [];
		this.loading = true;
		this._queueService.getRequestedHistory().then((response: IPagedResult<IQueuedTrack>) => {
			this.requestHistory = response.PageData;
			this.loading = false;
		})
	}

	loadUserHistory() {
		this.userHistory = [];
		this.loading = true;
		this._queueService.getMyHistory().then((response: IPagedResult<IQueuedTrack>) => {
			this.userHistory = response.PageData;
			this.loading = false;
		})
	}

}
