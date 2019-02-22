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
  public trackDetail$;
  public audioAnalysis$;

  private _keyLookup = [
    { index: 0, musicKey: 'C'},
    { index: 1, musicKey: 'C#'},
    { index: 2, musicKey: 'D'},
    { index: 3, musicKey: 'D#'},
    { index: 4, musicKey: 'E'},
    { index: 5, musicKey: 'F'},
    { index: 6, musicKey: 'F#'},
    { index: 7, musicKey: 'G'},
    { index: 8, musicKey: 'G#'},
    { index: 9, musicKey: 'A'},
    { index: 10, musicKey: 'A#'},
    { index: 11, musicKey: 'B'}
  ];
  constructor (
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) { }

  ngOnInit () {
    const trackId = this._route.snapshot.params['trackId'];
    const artistId = this._route.snapshot.params['artistId'];

    this.artistDetail$ = this._spotifyService.getArtist(artistId);
    this.trackDetail$ = this._spotifyService.getTrack(trackId);

    this.audioAnalysis$ = this._spotifyService.getAudioAnalysis(trackId);
  }

  public getMode (mode: number) {
    if (mode === 1) {
      return 'major';
    } else if (mode === 0) {
      return 'minor';
    } else {
      return '';
    }
  }

  public getKey (keyIndex: number) {
    if (!keyIndex && keyIndex !== 0) {
      return '(unknown)';
    }

    const result = this._keyLookup.find(k => k.index === keyIndex);
    if (!result) {
      return '(unknown)';
    }

    return result.musicKey;
  }

}
