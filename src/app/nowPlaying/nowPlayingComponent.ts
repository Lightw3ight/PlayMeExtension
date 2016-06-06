import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import moment from 'moment';

import {SearchService} from '../services/searchService';
import {IQueuedTrack} from '../models/IQueuedTrack';
import {AudioZoneService, IAudioZone} from '../services/audioZoneService';
import {IPagedResult} from '../models/IPagedResult';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap'
import {UserInfoService} from '../services/userInfoService';
import {SignalRService} from '../services/signalrService';



import {SearchBarComponent} from '../search/searchBarComponent';
import {ZoneSelectorComponent} from './zoneSelectorComponent';
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {QueuedTrackComponent} from '../tracks/QueuedTrackComponent';

@Component({
	selector: 'now-playing',
	templateUrl: '/app/nowPlaying/nowPlayingComponent.html',
	directives: [
		ROUTER_DIRECTIVES,
		SearchBarComponent,
		ZoneSelectorComponent,
		TAB_DIRECTIVES,
		QueuedTrackComponent,
		TOOLTIP_DIRECTIVES
	]
})
export class NowPlayingComponent implements OnInit, OnDestroy {
	currentTrack: IQueuedTrack = null;
	currentTime: number;
	activeZone: string;
	trackQueue: IQueuedTrack[] = [];
	trackHistory: IQueuedTrack[] = [];
	test = 'hello<br>nworld';


	backgroundColor: '#FFF';
	foregroundColor: '#000';

	constructor(private _searchService: SearchService,
	private _audioZoneService: AudioZoneService,
	private _userInfoService: UserInfoService,
	private _signalRService: SignalRService) {

	}

	ngOnDestroy() {
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

	getPercentComplete() {
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
		return percent + '%';
	}
}