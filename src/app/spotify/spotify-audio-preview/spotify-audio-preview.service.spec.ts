import { TestBed, inject } from '@angular/core/testing';

import { SpotifyAudioPreviewService } from './spotify-audio-preview.service';

describe('SpotifyAudioPreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyAudioPreviewService]
    });
  });

  it('should be created', inject([SpotifyAudioPreviewService], (service: SpotifyAudioPreviewService) => {
    expect(service).toBeTruthy();
  }));
});
