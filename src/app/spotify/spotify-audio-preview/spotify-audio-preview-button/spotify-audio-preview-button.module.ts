import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyAudioPreviewButtonComponent } from './spotify-audio-preview-button.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    SpotifyAudioPreviewButtonComponent
  ],
  exports: [
    SpotifyAudioPreviewButtonComponent
  ],
  providers: [
  ]
})
export class SpotifyAudioPreviewButtonModule { }
