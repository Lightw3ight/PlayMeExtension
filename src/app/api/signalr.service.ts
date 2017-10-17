import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import { AudioZoneService } from './audio-zone.service';
import { IQueuedTrack } from '../models/IQueuedTrack';
import { IPagedResult } from '../models/IPagedResult';
import { UserInfoService } from './user-info.service';
import { QueueService } from './queue.service';
import * as moment from 'moment';

@Injectable()
export class SignalRService {
    $: any;
    _hub: any;
    // private nowPlayingObservable: Observable<IQueuedTrack>;
    // private nowPlayingObserver: any;

    // private upNextObservable: Observable<IQueuedTrack[]>;
    // private upNextObserver: any;

    // private recentlyPlayedObservable: Observable<IQueuedTrack[]>;
    // private recentlyPlayedObserver: any;
    private audioZoneUrl: string;

    private _nowPlaying$ = new ReplaySubject<IQueuedTrack>();
    private _recentlyPlayed$ = new ReplaySubject<IQueuedTrack[]>();
    private _upNext$ = new ReplaySubject<IQueuedTrack[]>();

    constructor(private _queueService: QueueService) {
        this.$ = window['$'];

        // this.nowPlayingObservable = <Observable<IQueuedTrack>>Observable.create(observer => {
        //     this.nowPlayingObserver = observer;
        // });

        // this.upNextObservable = <Observable<IQueuedTrack[]>>Observable.create(observer => {
        //     this.upNextObserver = observer;
        // });

        // this.recentlyPlayedObservable = <Observable<IQueuedTrack[]>>Observable.create(observer => {
        //     this.recentlyPlayedObserver = observer;
        // });
    }

    initializeHub(audioZoneUrl: string) {
        this._hub = this.$.connection.queueHub;
        this.$.connection.hub.url = `${audioZoneUrl}/signalr`;
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
        this.$.connection.hub.stop();
    }

    likeTrack(trackId: string) {
        this._hub.server.likeTrack(trackId);
    }

    vetoTrack(trackId: string) {
        this._hub.server.vetoTrack(trackId);
    }

    getRecentlyPlayed(): Observable<IQueuedTrack[]> {
        return this._recentlyPlayed$.asObservable();
    }

    getNextUp(): Observable<IQueuedTrack[]> {
        return this._upNext$.asObservable();
    }

    getNowPlaying(): Observable<IQueuedTrack> {
        return this._nowPlaying$.asObservable();
    }

    private onUpdateCurrentTrack = (track: IQueuedTrack) => {
        this._queueService.parseQueuedTrack(track);
        this._nowPlaying$.next(track);
        // if (this.nowPlayingObserver) {
        //     this.nowPlayingObserver.next(track);
        // }
    }

    private onUpdatePlayingSoon = (data: IQueuedTrack[]) => {
        data.forEach(this._queueService.parseQueuedTrack);
        this._upNext$.next(data);
        // if (this.upNextObserver) {
        //     this.upNextObserver.next(data);
        // }
    }

    private onUpdateRecentlyPlayed = (data: IPagedResult<IQueuedTrack>) => {
        data.PageData.forEach(this._queueService.parseQueuedTrack);
        this._recentlyPlayed$.next(data.PageData);
        // if (this.recentlyPlayedObserver) {
        //     this.recentlyPlayedObserver.next(data.PageData);
        // }
    }

    private startSockets() {
        this._hub.server.getCurrentTrack();
        this._hub.server.getPlayingSoon();
        this._hub.server.getRecentlyPlayed();
        this._hub.server.getCurrentVolume();
    }
}