import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SpotifyAudioPreviewService } from './../spotify-audio-preview.service';
import { Component, OnInit, Input } from '@angular/core';
import { takeUntil, tap, takeWhile, map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'pm-spotify-audio-preview-button',
  templateUrl: './spotify-audio-preview-button.component.html',
  styleUrls: ['./spotify-audio-preview-button.component.scss']
})
export class SpotifyAudioPreviewButtonComponent implements OnInit {

  @Input() track;

  public isTrackPlaying$: Observable<boolean>;
  private _destroyed$ = new Subject<any>();

  constructor (
    private _spotifyAudioPreviewService: SpotifyAudioPreviewService
  ) {
  }

  ngOnInit () {
    this.isTrackPlaying$ =  this._spotifyAudioPreviewService.currentlyPlayingTrack$
    .pipe(
      map(track => track && track.Link === this.track.Link),
      takeUntil(this._destroyed$)
    );
  }

  public ngOnDestroy (): void {
    this._destroyed$.next();
}

  playPreview () {
    this._spotifyAudioPreviewService.previewTrack(this.track);
  }

}
