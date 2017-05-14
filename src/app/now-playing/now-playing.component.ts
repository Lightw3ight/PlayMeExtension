import { routeAnimation } from './../router-animation';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
    QueuedTrackComponent,
    OpinionButtonsComponent
} from '../shared';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
    selector: 'pm-now-playing',
    templateUrl: 'now-playing.component.html',
    styleUrls: ['now-playing.component.scss'],
    animations: [ routeAnimation ]
})
export class NowPlayingComponent implements OnInit, OnDestroy {
    currentTrack: IQueuedTrack = null;
    currentTime: number;
    activeZone: string;
    trackQueue: IQueuedTrack[] = [];
    trackHistory: IQueuedTrack[] = [];
    trackProgress: number;
    progressIntervalId: number;
    @HostBinding('@routerTransition') animate = true;

    backgroundColor: '#FFF';
    foregroundColor: '#000';
    private subscriptions: Subscription[] = [];

    constructor(private _searchService: SearchService,
        private _audioZoneService: AudioZoneService,
        private _userInfoService: UserInfoService,
        private _signalRService: SignalRService,
        private _domSanitizationService: DomSanitizer) {
    }

    createSpotifyUrl(track: IQueuedTrack) {
        if (!track) {
            return null;
        }
        return this._domSanitizationService.bypassSecurityTrustUrl(`spotify:track:${track.Track.Link}`);
    }

    ngOnInit() {
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

        this.subscriptions.push(this._audioZoneService.getCurrentZone().subscribe(zone => {
            this.changeZone(zone.path);
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
        window.clearInterval(this.progressIntervalId);
        this.closeHubConnection();
    }

    private openHubConnection() {
        this._signalRService.initializeHub(this.activeZone);
    }

    private closeHubConnection() {
        this._signalRService.closeHubConnection();
    }

    changeZone(zone: string) {
        if (this.activeZone) {
            this.closeHubConnection();
        }

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
        let percent = 0;
        if (this.currentTrack) {

            const timeStarted = this.currentTrack.StartedPlayingDateTime.getTime();
            const now = new Date().getTime();
            let elapsed = now - (timeStarted + this.currentTrack.PausedDurationAsMilliseconds);

            if (elapsed > this.currentTrack.Track.DurationMilliseconds) {
                elapsed = this.currentTrack.Track.DurationMilliseconds;
            }

            percent = (elapsed / this.currentTrack.Track.DurationMilliseconds) * 100;
        }
        this.trackProgress = percent;
    }
}
