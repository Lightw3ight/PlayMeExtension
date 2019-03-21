import { ITrack } from './../../../api/models/track.interface';
import { Component, OnInit } from '@angular/core';
import { SpotifyAudioPreviewService } from '../spotify-audio-preview.service';

@Component({
  selector: 'pm-spotify-audio-preview-player',
  templateUrl: './spotify-audio-preview-player.component.html',
  styleUrls: ['./spotify-audio-preview-player.component.scss']
})
export class SpotifyAudioPreviewPlayerComponent implements OnInit {

  public nowPlayingTrack: ITrack;

  private _currentlyPlayingAudio: HTMLAudioElement;

  constructor (
    private _spotifyAudioPreviewService: SpotifyAudioPreviewService
  ) { }

  ngOnInit () {
    // this._spotifyAudioPreviewService.currentlyPlayingTrack$.subscribe(track => {
    //   this.nowPlayingTrack = track;

    //   if (this._currentlyPlayingAudio) {
    //     this._currentlyPlayingAudio.pause();
    //     delete this._currentlyPlayingAudio;
    //   }

    //   let audio = new Audio();
    //   audio.src = track.AudioPreviewUrl;
    //   audio.load();

    //   this._currentlyPlayingAudio = audio;
    //   audio.play();
    // });
  }
}
