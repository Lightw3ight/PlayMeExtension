import { Injectable, EventEmitter } from '@angular/core';
import { ITrack } from 'app/api/models';

@Injectable()
export class SpotifyAudioPreviewService {

  private _currentlyPlayingAudio: HTMLAudioElement;

  public currentlyPlayingTrack$ = new EventEmitter<ITrack>();

  public currentlyPlayingTrackDetail$ = new EventEmitter<any>();

  constructor () { }

  public previewTrack (track: any) {

    this.playTrack(track);
  }

  private playTrack (track: any) {
    this.stopCurrentTrack();

    this.broadcastCurrentTrack(track);

    const audio = new Audio();
    audio.src = track.AudioPreviewUrl;
    audio.load();

    this._currentlyPlayingAudio = audio;
    audio.play();

    audio.addEventListener('playing', (event) => {
      console.log('started playing');
    });

    audio.addEventListener('ended', (event) => {
      this.broadcastCurrentTrack(null);
      console.log('ended playing');
    });
  }

  private stopCurrentTrack () {
    if (this._currentlyPlayingAudio) {
      this._currentlyPlayingAudio.pause();
      delete this._currentlyPlayingAudio;
    }
  }

  private broadcastCurrentTrack (track: ITrack) {
    this.currentlyPlayingTrack$.emit(track);
  }
}
