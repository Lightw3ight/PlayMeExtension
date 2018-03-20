import { TestBed, inject } from '@angular/core/testing';

import { SpotifyUserService } from './spotify-user.service';

describe('SpotifyUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyUserService]
    });
  });

  it('should be created', inject([SpotifyUserService], (service: SpotifyUserService) => {
    expect(service).toBeTruthy();
  }));
});
