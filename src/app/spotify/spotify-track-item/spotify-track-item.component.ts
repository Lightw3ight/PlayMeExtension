import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { QueueService } from 'app/api';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'pm-spotify-track-item',
  templateUrl: './spotify-track-item.component.html',
  styleUrls: [
    '../../shared/track-item/track-item.scss',
    './spotify-track-item.component.scss'
  ]
})
export class SpotifyTrackItemComponent implements OnInit, OnDestroy {


  @Input() trackContainer;

  private _isQueued = false;

  private _destroyed$: Subject<any> = new Subject<any>();

  constructor (
    private _queueService: QueueService
  ) { }

  ngOnInit () {
  }

  ngOnDestroy (): void {
    this._destroyed$.next();
  }

  get track () {
    return this.trackContainer.track;
  }

  get trackImage () {
    const images = this.trackContainer.track.album.images;

    if (!images) {
      return null;
    }

    return images[images.length - 1].url;
  }

  get isAlreadyQueued () {
    return this._isQueued;
  }

  queueTrack () {
    this._queueService
        .queueTrackById('sp', this.trackContainer.track.id)
        .takeUntil(this._destroyed$)
        .subscribe(() => {

          // Note: Show this is only temporary (for this playlist view).
          // We'd need more from the API to figure this one out.
          // (Namely the current user's name, and cross-reference it to the currently playing + queued list...)
          this._isQueued = true;
        });
  }

  // TODO
  // queueWithComment () { }

}
