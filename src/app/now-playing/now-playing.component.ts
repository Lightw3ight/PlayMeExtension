import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import * as moment from 'moment';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap'



import {
	IQueuedTrack,
	IPagedResult
} from '../models';
import {
	AudioZoneService,
	IAudioZone,
	UserInfoService,
	SignalRService,
	SearchService
} from '../api';
import {
	UserListComponent,
	SearchBarComponent,
	QueuedTrackComponent
} from '../shared';



import {ZoneSelectorComponent} from './zone-selector/zone-selector.component';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	moduleId: module.id,
	selector: 'now-playing',
	templateUrl: 'now-playing.component.html',
	styleUrls: ['now-playing.component.css'],
	directives: [
		ROUTER_DIRECTIVES,
		SearchBarComponent,
		ZoneSelectorComponent,
		TAB_DIRECTIVES,
		QueuedTrackComponent,
		TOOLTIP_DIRECTIVES,
		UserListComponent
	]
})
export class NowPlayingComponent implements OnInit, OnDestroy {
	currentTrack: IQueuedTrack = null;
	currentTime: number;
	activeZone: string;
	trackQueue: IQueuedTrack[] = [];
	trackHistory: IQueuedTrack[] = [];
	trackProgress: string;
	progressIntervalId: number;

	backgroundColor: '#FFF';
	foregroundColor: '#000';

	constructor(private _searchService: SearchService,
		private _audioZoneService: AudioZoneService,
		private _userInfoService: UserInfoService,
		private _signalRService: SignalRService) {

	}

	ngOnDestroy() {
		window.clearInterval(this.progressIntervalId);
		this.closeHubConnection();
	}

	ngOnInit() {
		this.activeZone = this._audioZoneService.getCurrentZone();
		this.openHubConnection();

		this._signalRService.getRecentlyPlayed().subscribe(history => {
			this.trackHistory = history;
		})
		this._signalRService.getNextUp().subscribe(queue => {
			this.trackQueue = queue;
		})
		this._signalRService.getNowPlaying().subscribe(track => {
			this.currentTrack = track;
		});

		this.progressIntervalId = window.setInterval(this.calculatePercentComplete, 500);
	}

	private openHubConnection() {
		this._signalRService.initializeHub();
	}

	private closeHubConnection() {
		this._signalRService.closeHubConnection();
	}

	changeZone(zone) {
		this.closeHubConnection();
		this.activeZone = zone;
		this.openHubConnection();
	}

	likeTrack(queuedTrack: IQueuedTrack) {
		this._signalRService.likeTrack(queuedTrack.Id);
	}

	vetoTrack(queuedTrack: IQueuedTrack) {
		this._signalRService.vetoTrack(queuedTrack.Id);
	}

	calculatePercentComplete = () => {
		//return '0%';
		var percent = 0;
		if (this.currentTrack) {

			var timeStarted = this.currentTrack.StartedPlayingDateTime.getTime();
			var now = new Date().getTime();
			var elapsed = now - (timeStarted + this.currentTrack.PausedDurationAsMilliseconds);

			if (elapsed > this.currentTrack.Track.DurationMilliseconds) {
				elapsed = this.currentTrack.Track.DurationMilliseconds;
			}

			percent = (elapsed / this.currentTrack.Track.DurationMilliseconds) * 100;
		}
		this.trackProgress = percent + '%';
	}
}