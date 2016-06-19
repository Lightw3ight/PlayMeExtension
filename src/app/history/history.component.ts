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
import {
	UserListComponent,
	SearchBarComponent,
	QueuedTrackComponent,
	BreadcrumbsComponent
} from '../shared';

import {ZoneSelectorComponent} from '../now-playing/zone-selector/zone-selector.component';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	moduleId: module.id,
	selector: 'app-history',
	templateUrl: 'history.component.html',
	styleUrls: ['history.component.css'],
	directives: [
		SearchBarComponent,
		ZoneSelectorComponent,
		TAB_DIRECTIVES,
		QueuedTrackComponent,
		UserListComponent,
		BreadcrumbsComponent
	]
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
		this._queueService.getHistory().then(response => {
			this.history = response.PageData;
			this.loading = false;
		})
	}

	loadRequestHistory() {
		this.requestHistory = [];
		this.loading = true;
		this._queueService.getRequestedHistory().then(response => {
			this.requestHistory = response.PageData;
			this.loading = false;
		})
	}

	loadUserHistory() {
		this.userHistory = [];
		this.loading = true;
		this._queueService.getMyHistory().then(response => {
			this.userHistory = response.PageData;
			this.loading = false;
		})
	}

}
