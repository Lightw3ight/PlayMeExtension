import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'app/api';

@Component({
  selector: 'pm-spotify-top-tracks',
  templateUrl: './spotify-top-tracks.component.html',
  styleUrls: ['./spotify-top-tracks.component.scss']
})
export class SpotifyTopTracksComponent implements OnInit {

  public topTracks$;

  constructor (
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit () {
    this.topTracks$ = this._spotifyService.getTopTracks({ limit: 50 });Í
  }

}
