import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SearchService } from './search.service';

describe('Search Service', () => {
  beforeEachProviders(() => [SearchService]);

  it('should ...',
      inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
