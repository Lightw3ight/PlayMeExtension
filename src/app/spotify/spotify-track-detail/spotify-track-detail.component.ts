import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'app/api';

@Component({
  selector: 'pm-spotify-track-detail',
  templateUrl: './spotify-track-detail.component.html',
  styleUrls: ['./spotify-track-detail.component.scss']
})
export class SpotifyTrackDetailComponent implements OnInit {

  public artistDetail$;
  public audioAnalysis$;

  constructor (
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit () {
    const trackId = this._route.snapshot.params['trackId'];
    const artistId = this._route.snapshot.params['artistId'];

    this.artistDetail$ = this._spotifyService.getArtist(artistId);

    this.audioAnalysis$ = this._spotifyService.getAudioAnalysis(trackId);
  }

}
