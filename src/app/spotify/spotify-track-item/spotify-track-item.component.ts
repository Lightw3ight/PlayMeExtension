import { Component, OnInit, Input } from '@angular/core';

import { QueueService } from 'app/api';

@Component({
  selector: 'pm-spotify-track-item',
  templateUrl: './spotify-track-item.component.html',
  styleUrls: [
    '../../shared/track-item/track-item.scss',
    './spotify-track-item.component.scss'
  ]
})
export class SpotifyTrackItemComponent implements OnInit {

  @Input() trackContainer;

  constructor (
    private _queueService: QueueService
  ) { }

  ngOnInit () {
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
    return false;
  }

  queueTrack () {
    this._queueService
        .queueTrackById('sp', this.trackContainer.track.id)
        .subscribe();
  }

  // queueWithComment () { }



}
