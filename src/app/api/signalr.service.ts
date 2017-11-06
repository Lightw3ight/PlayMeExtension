import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AudioZoneService } from './audio-zone.service';
import { IQueuedTrack } from '../models/IQueuedTrack';
import { IPagedResult } from '../models/IPagedResult';
import { UserInfoService } from './user-info.service';
import { QueueService } from './queue.service';
import * as moment from 'moment';
import { KarmaService } from './karma.service';

@Injectable()
export class SignalRService {
    private _hub: any;
    private _nowPlaying$ = new ReplaySubject<IQueuedTrack>();
    private _recentlyPlayed$ = new ReplaySubject<IQueuedTrack[]>();
    private _upNext$ = new ReplaySubject<IQueuedTrack[]>();

    constructor (
        private _queueService: QueueService,
        private _karmaService: KarmaService
    ) { }

    private get connection () {
        return window['$'].connection;
    }

    public initializeHub (audioZoneUrl: string) {
        this.closeHubConnection();

        this._hub = this.connection.queueHub;
        this.connection.hub.url = `${audioZoneUrl}/signalr`;
        this._hub.on('updateCurrentTrack', this.onUpdateCurrentTrack);
        this._hub.on('updatePlayingSoon', this.onUpdatePlayingSoon);
        this._hub.on('updateRecentlyPlayed', this.onUpdateRecentlyPlayed);

        this.connection.hub.start({ transport: ['webSockets', 'serverSentEvents', 'longPolling'] })
            .done(() => {
                this.startSockets();
            });
    }

    public closeHubConnection () {
        if (this._hub) {
            this._hub.off('updateCurrentTrack', this.onUpdateCurrentTrack);
            this._hub.off('updatePlayingSoon', this.onUpdatePlayingSoon);
            this._hub.off('updateRecentlyPlayed', this.onUpdateRecentlyPlayed);
            this.connection.hub.stop();
        }
    }

    public likeTrack (trackId: string) {
        this._karmaService.addKarma();
        this._hub.server.likeTrack(trackId);
    }

    public vetoTrack (trackId: string) {
        this._karmaService.removeKarma();
        this._hub.server.vetoTrack(trackId);
    }

    public getRecentlyPlayed (): Observable<IQueuedTrack[]> {
        return this._recentlyPlayed$.asObservable();
    }

    public getNextUp (): Observable<IQueuedTrack[]> {
        return this._upNext$.asObservable();
    }

    public getNowPlaying (): Observable<IQueuedTrack> {
        return this._nowPlaying$.asObservable();
    }

    private onUpdateCurrentTrack = (track: IQueuedTrack) => {
        this._queueService.parseQueuedTrack(track);
        this._nowPlaying$.next(track);
    }

    private onUpdatePlayingSoon = (data: IQueuedTrack[]) => {
        data.forEach(t => this._queueService.parseQueuedTrack(t));
        this._upNext$.next(data);
    }

    private onUpdateRecentlyPlayed = (data: IPagedResult<IQueuedTrack>) => {
        data.PageData.forEach(t => this._queueService.parseQueuedTrack(t));
        this._recentlyPlayed$.next(data.PageData);
    }

    private startSockets () {
        this._hub.server.getCurrentTrack();
        this._hub.server.getPlayingSoon();
        this._hub.server.getRecentlyPlayed();
        this._hub.server.getCurrentVolume();
    }
}
