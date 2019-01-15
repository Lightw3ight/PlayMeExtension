import { Injectable, EventEmitter } from '@angular/core';
import { ITrack } from 'app/api/models';

@Injectable()
export class SpotifyAudioPreviewService {

  public playThisSong$ = new EventEmitter<ITrack>();

  constructor () { }

  public previewTrack (track: any) {
    this.playThisSong$.emit(track);

    console.log('Playing track', track);
  }
}
