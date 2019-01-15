import { SpotifyAudioPreviewService } from './../spotify-audio-preview.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-spotify-audio-preview-button',
  templateUrl: './spotify-audio-preview-button.component.html',
  styleUrls: ['./spotify-audio-preview-button.component.scss']
})
export class SpotifyAudioPreviewButtonComponent implements OnInit {

  @Input() track;

  constructor (
    private _spotifyAudioPreviewService: SpotifyAudioPreviewService
  ) {
  }

  ngOnInit () {

  }

  playPreview () {
    this._spotifyAudioPreviewService.previewTrack(this.track);
  }

}
