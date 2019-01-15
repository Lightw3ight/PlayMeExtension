import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SpotifyAudioPreviewService {

  public playThisSong$ = new EventEmitter<any>();

  constructor () { }

  public previewTrack (track: any) {
    this.playThisSong$.emit(track);

    console.log('Playing track', track);
  }
}
