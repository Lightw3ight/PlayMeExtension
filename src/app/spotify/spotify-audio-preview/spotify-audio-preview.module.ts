import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyAudioPreviewPlayerComponent } from './spotify-audio-preview-player/spotify-audio-preview-player.component';
import { SpotifyAudioPreviewService } from './spotify-audio-preview.service';
import { SpotifyAudioPreviewButtonComponent } from './spotify-audio-preview-button/spotify-audio-preview-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpotifyAudioPreviewPlayerComponent,
    SpotifyAudioPreviewButtonComponent
  ],
  exports: [
    SpotifyAudioPreviewPlayerComponent
  ],
  providers: [
    SpotifyAudioPreviewService
  ]
})
export class SpotifyAudioPreviewModule { }
