import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ArtistService } from './artist.service';

describe('Artist Service', () => {
  beforeEachProviders(() => [ArtistService]);

  it('should ...',
      inject([ArtistService], (service: ArtistService) => {
    expect(service).toBeTruthy();
  }));
});
