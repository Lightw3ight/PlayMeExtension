import { LIKE_COUNT_KEY } from './../../api/karma.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-spotify-track-item',
  templateUrl: './spotify-track-item.component.html',
  styleUrls: ['./spotify-track-item.component.scss']
})
export class SpotifyTrackItemComponent implements OnInit {

  @Input() track;

  constructor () { }

  ngOnInit () {
  }

  get trackImage () {
    let images = this.track.track.album.images;

    if (!images) {
      return null;
    }

    return images[images.length - 1].url;
  }

  get isAlreadyQueued () {
    return false;
  }

  queueTrack () { }

  queueWithComment () { }



}
