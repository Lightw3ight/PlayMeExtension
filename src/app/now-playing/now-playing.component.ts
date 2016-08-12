import {Component, OnInit, OnDestroy, DynamicComponentLoader} from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import * as moment from 'moment';
import {Subscription} from 'rxjs';
//import { TOOLTIP_DIRECTIVES, TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap'



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
	QueuedTrackComponent,
	OpinionButtonsComponent
} from '../shared';



import {ZoneSelectorComponent} from './zone-selector/zone-selector.component';

@Component({
	moduleId: module.id,
	selector: 'now-playing',
	templateUrl: 'now-playing.component.html',
	styleUrls: ['now-playing.component.css'],
	directives: [
		ROUTER_DIRECTIVES
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
	private subscriptions: Subscription[] = [];

	constructor(private _searchService: SearchService,
		private _audioZoneService: AudioZoneService,
		private _userInfoService: UserInfoService,
		private _signalRService: SignalRService,
		private _domSanitizationService: DomSanitizationService) {
	}

	createSpotifyUrl(track: IQueuedTrack){
		if (!track){
			return null;
		}
		return this._domSanitizationService.bypassSecurityTrustUrl(`spotify:track:${track.Track.Link}`);
	}

	ngOnInit() {
		this.activeZone = this._audioZoneService.getCurrentZone();
		this.openHubConnection();
		this.subscriptions.push(this._signalRService.getRecentlyPlayed().subscribe(history => {
			this.trackHistory = history;
		}));
		this.subscriptions.push(this._signalRService.getNextUp().subscribe(queue => {
			this.trackQueue = queue;
		}));
		this.subscriptions.push(this._signalRService.getNowPlaying().subscribe(track => {
			this.currentTrack = track;
		}));
		this.progressIntervalId = window.setInterval(this.calculatePercentComplete, 500);
	}

	ngOnDestroy() {
		this.subscriptions.forEach(s => s.unsubscribe());
		window.clearInterval(this.progressIntervalId);
		this.closeHubConnection();
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