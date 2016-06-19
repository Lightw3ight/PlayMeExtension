import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AudioZoneService } from './audio-zone.service';

describe('AudioZone Service', () => {
  beforeEachProviders(() => [AudioZoneService]);

  it('should ...',
      inject([AudioZoneService], (service: AudioZoneService) => {
    expect(service).toBeTruthy();
  }));
});
