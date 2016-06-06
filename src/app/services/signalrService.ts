import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {AudioZoneService, IAudioZone} from '../services/audioZoneService';
import {IQueuedTrack} from '../models/IQueuedTrack';
import {IPagedResult} from '../models/IPagedResult';
import {UserInfoService} from '../services/userInfoService';
import moment from 'moment';





@Injectable()
export class SignalRService {
	$: any;
	_hub: any;
	private nowPlayingObservable: Observable<IQueuedTrack>;
	private nowPlayingObserver: any;

	private upNextObservable: Observable<IQueuedTrack[]>;
	private upNextObserver: any;

	private recentlyPlayedObservable: Observable<IQueuedTrack[]>;
	private recentlyPlayedObserver: any;

	constructor(private _audioZoneService: AudioZoneService, private _userInfoService: UserInfoService) {
		this.$ = window['$'];

		this.nowPlayingObservable = <Observable<IQueuedTrack>>Observable.create(observer => {
			this.nowPlayingObserver = observer;
		});

		this.upNextObservable = <Observable<IQueuedTrack[]>>Observable.create(observer => {
			this.upNextObserver = observer;
		});

		this.recentlyPlayedObservable = <Observable<IQueuedTrack[]>>Observable.create(observer => {
			this.recentlyPlayedObserver = observer;
		});
	}

	initializeHub() {
		this._hub = this.$.connection.queueHub;
		this.$.connection.hub.url = `http://music.trademe.local/${this._audioZoneService.getCurrentZone()}/signalr`;
		this._hub.on('updateCurrentTrack', this.onUpdateCurrentTrack);
		this._hub.on('updatePlayingSoon', this.onUpdatePlayingSoon);
		this._hub.on('updateRecentlyPlayed', this.onUpdateRecentlyPlayed);

		this.$.connection.hub.start({ transport: ['webSockets', 'serverSentEvents', 'longPolling'] })
			.done(() => {
				this.startSockets();
			});
	}
	
	closeHubConnection() {
		this._hub.off('updateCurrentTrack', this.onUpdateCurrentTrack);
		this._hub.off('updatePlayingSoon', this.onUpdatePlayingSoon);
		this._hub.off('updateRecentlyPlayed', this.onUpdateRecentlyPlayed);
		this.$.connection.hub.stop()
	}

	likeTrack(trackId: string) {
		this._hub.server.likeTrack(trackId);
	}

	vetoTrack(trackId: string) {
		this._hub.server.vetoTrack(trackId);
	}
	
	getRecentlyPlayed(): Observable<IQueuedTrack[]>{
		return this.recentlyPlayedObservable;
	}
	
	getNextUp(): Observable<IQueuedTrack[]>{
		return this.upNextObservable;
	}
	
	getNowPlaying(): Observable<IQueuedTrack>{
		return this.nowPlayingObservable;
	}

	private onUpdateCurrentTrack = (track: IQueuedTrack) => {
		if (this.nowPlayingObserver) {
			this.parseQueuedTrack(track);
			this.nowPlayingObserver.next(track);
		}
	}

	private onUpdatePlayingSoon = (data: IQueuedTrack[]) => {
		data.forEach(this.parseQueuedTrack);
		if (this.upNextObserver) {
			this.upNextObserver.next(data);
		}
	}

	private onUpdateRecentlyPlayed = (data: IPagedResult<IQueuedTrack>) => {
		data.PageData.forEach(this.parseQueuedTrack);
		if (this.recentlyPlayedObserver) {
			this.recentlyPlayedObserver.next(data.PageData);
		}
	}

	private startSockets() {
		//setInterval(this.setCurrentTime, 500);
		this._hub.server.getCurrentTrack();
        this._hub.server.getPlayingSoon();
        this._hub.server.getRecentlyPlayed();
        this._hub.server.getCurrentVolume();
	}
	
		parseQueuedTrack = (queueItem: IQueuedTrack) => {
		queueItem.StartedPlayingDateTime = queueItem.StartedPlayingDateTime ? moment(queueItem.StartedPlayingDateTime).toDate() : null;
		queueItem['fullName'] = this._userInfoService.getUserFullName(queueItem.User);
		queueItem['userId'] = this._userInfoService.parseUserId(queueItem.User);
		queueItem['url'] = queueItem['userId'] ? `http://guesswho/#${queueItem['userId']}` : null;
		queueItem['userPhotoUrl'] = queueItem['userId'] ? `http://guesswho/StaffPhoto.ashx?userId=${queueItem['userId']}` : null;

		queueItem.Likes.forEach(l => {
			var uid = this._userInfoService.parseUserId(l.ByUser)
			l['url'] = uid ? `http://guesswho/#${uid}` : null;
			l['fullName'] = this._userInfoService.getUserFullName(l.ByUser);
			l['userPhotoUrl'] = uid ? `http://guesswho/StaffPhoto.ashx?userId=${uid}` : null;

		})
		queueItem.Vetoes.forEach(l => {
			var uid = this._userInfoService.parseUserId(l.ByUser)
			l['url'] = uid ? `http://guesswho/#${uid}` : null;
			l['fullName'] = this._userInfoService.getUserFullName(l.ByUser);
			l['userPhotoUrl'] = uid ? `http://guesswho/StaffPhoto.ashx?userId=${uid}` : null;
		})
		return queueItem;
	}
}