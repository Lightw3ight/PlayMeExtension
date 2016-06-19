import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SignalRService } from './signalr.service';

describe('Signalr Service', () => {
  beforeEachProviders(() => [SignalRService]);

  it('should ...',
      inject([SignalRService], (service: SignalRService) => {
    expect(service).toBeTruthy();
  }));
});
