import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

import { QueueService } from 'app/api';
import { Subject } from 'rxjs/Subject';
import { SpotifyTrackModel } from '../models/spotify-track.model';

@Component({
    selector: 'pm-spotify-track-item',
    templateUrl: './spotify-track-item.component.html',
    styleUrls: [
        // '../../shared/track-item/track-item.scss',
        './spotify-track-item.component.scss'
    ]
})
export class SpotifyTrackItemComponent implements OnDestroy, OnChanges {
    @Input() track: SpotifyTrackModel;
    private _isQueued = false;
    private _destroyed$: Subject<any> = new Subject<any>();
    public trackLength: string;

    constructor (
        private _queueService: QueueService
    ) { }

    public ngOnChanges (changes: SimpleChanges): void {
        if (changes.track && this.track) {
            this.trackLength = this.msToTime(this.track.duration_ms);
        }
    }

    public ngOnDestroy (): void {
        this._destroyed$.next();
    }

    get trackImage () {
        const images = this.track.album.images;

        if (!images) {
            return null;
        }

        return images[images.length - 1].url;
    }

    get isAlreadyQueued () {
        return this._isQueued;
    }

    public queueTrack () {
        this._queueService
            .queueTrackById('sp', this.track.id)
            .takeUntil(this._destroyed$)
            .subscribe(() => {

                // Note: Show this is only temporary (for this playlist view).
                // We'd need more from the API to figure this one out.
                // (Namely the current user's name, and cross-reference it to the currently playing + queued list...)
                this._isQueued = true;
            });
    }

    msToTime (duration) {
        // let ms = (duration % 1000) / 100;
        const h = duration / (1000 * 60 * 60);
        const hours = Math.floor(h);

        const m = (h - hours) * 60;
        const minutes = Math.floor(m);

        const seconds = Math.floor((m - minutes) * 60);
        // const seconds = Math.floor(duration / 1000);
        // const minutes = Math.floor(duration / (1000 * 60));

        return hours ? `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}` : `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    }

    private padNumber (num: number) {
        return (num < 10) ? '0' + num : num;
    }

    // TODO
    // queueWithComment () { }

}
