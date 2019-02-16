import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'app/api/spotify.service';

@Component({
  selector: 'pm-spotify-recently-played',
  templateUrl: './spotify-recently-played.component.html',
  styleUrls: ['./spotify-recently-played.component.scss']
})
export class SpotifyRecentlyPlayedComponent implements OnInit {

  public recentlyPlayedTracks$;

  constructor (
    private _spotifyService: SpotifyService

  ) { }

  ngOnInit () {
    this.recentlyPlayedTracks$ = this._spotifyService.getRecentlyPlayed({ limit: 50 });
  }

}
