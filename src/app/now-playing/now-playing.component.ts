import { routeAnimation } from './../router-animation';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import * as moment from 'moment';
import {
    IQueuedTrack,
    IPagedResult
} from '../api/models';
import {
    IAudioZone,
    UserInfoService,
    SignalRService,
    SearchService,
    KarmaService
} from '../api';
import { trigger, transition, animate, style } from '@angular/animations';
import { switchMap, takeUntil, map } from 'rxjs/operators';

@Component({
    selector: 'pm-now-playing',
    templateUrl: 'now-playing.component.html',
    styleUrls: ['now-playing.component.scss'],
    animations: [ routeAnimation ]
})
export class NowPlayingComponent implements OnInit {
    @HostBinding('@routerTransition') animate = true;
    public currentTrack$: Observable<IQueuedTrack>;
    // public trackQueue$: Observable<IQueuedTrack[]>;
    // public trackHistory$: Observable<IQueuedTrack[]>;
    public trackProgress$: Observable<number>;
    public trackElapsedTime$: Observable<string>;
    public karma$: Observable<number>;

    constructor (
        private _searchService: SearchService,
        private _userInfoService: UserInfoService,
        private _signalRService: SignalRService,
        private _domSanitizationService: DomSanitizer,
        private _karmaService: KarmaService
    ) { }

    public createSpotifyUrl (track: IQueuedTrack) {
        if (!track) {
            return null;
        }
        return this._domSanitizationService.bypassSecurityTrustUrl(`spotify:track:${track.Track.Link}`);
    }

    public ngOnInit () {
        this.karma$ = this._karmaService.getCurrentKarma();
        // this.trackHistory$ = this._signalRService.getRecentlyPlayed();
        // this.trackQueue$ = this._signalRService.getNextUp();
        this.currentTrack$ = this._signalRService.getNowPlaying();
        this.trackProgress$ = Observable
            .interval(500).pipe(
                switchMap(() => this.currentTrack$),
                map(track => this.getElapsedPercent(track)));

        this.trackElapsedTime$ = Observable
            .interval(500).pipe(
                switchMap(() => this.currentTrack$),
                map(track => this.getElapsedTime(track)));
    }

    public likeTrack (queuedTrack: IQueuedTrack) {
        this._signalRService.likeTrack(queuedTrack.Id);
    }

    public vetoTrack (queuedTrack: IQueuedTrack) {
        this._signalRService.vetoTrack(queuedTrack.Id);
    }

    getElapsedMilliseconds (track: IQueuedTrack) {
        if (!track) {
            return 0;
        }

        const timeStarted = track.StartedPlayingDateTime.getTime();
        const now = new Date().getTime();
        return Math.min(now - (timeStarted + track.PausedDurationAsMilliseconds), track.Track.DurationMilliseconds);
    }

    getElapsedPercent (track: IQueuedTrack): number {
        if (!track) {
            return 0;
        }

        const elapsed = this.getElapsedMilliseconds(track);
        return (elapsed / track.Track.DurationMilliseconds) * 100;
    }

    getElapsedTime (track: IQueuedTrack): string {
        if (!track) {
            return '';
        }

        const elapsedDuration = moment.duration(this.getElapsedMilliseconds(track));
        const totalDuration = moment.duration(track.Track.DurationMilliseconds);
        return `${elapsedDuration.minutes()}:${elapsedDuration.seconds()} / ${totalDuration.minutes()}:${totalDuration.seconds()}`;
    }

    public trackByFn (index: number, item: IQueuedTrack) {
        return item.Id;
    }
}
