import { Component, OnInit } from '@angular/core';
import { SpotifyAudioPreviewService } from '../spotify-audio-preview.service';

@Component({
  selector: 'pm-spotify-audio-preview-player',
  templateUrl: './spotify-audio-preview-player.component.html',
  styleUrls: ['./spotify-audio-preview-player.component.scss']
})
export class SpotifyAudioPreviewPlayerComponent implements OnInit {

  public nowPlayingTrack;

  private _currentlyPlayingAudio: HTMLAudioElement;

  constructor (
    private _spotifyAudioPreviewService: SpotifyAudioPreviewService
  ) { }

  ngOnInit () {
    this._spotifyAudioPreviewService.playThisSong$.subscribe(track => {
      this.nowPlayingTrack = track;

      if (this._currentlyPlayingAudio) {
        this._currentlyPlayingAudio.pause();
        delete this._currentlyPlayingAudio;
      }

      let audio = new Audio();
      audio.src = track.preview_url;
      audio.load();

      this._currentlyPlayingAudio = audio;
      audio.play();
    });
  }
}
