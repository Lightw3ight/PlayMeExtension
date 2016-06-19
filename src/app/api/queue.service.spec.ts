import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { QueueService } from './queue.service';

describe('Queue Service', () => {
  beforeEachProviders(() => [QueueService]);

  it('should ...',
      inject([QueueService], (service: QueueService) => {
    expect(service).toBeTruthy();
  }));
});
