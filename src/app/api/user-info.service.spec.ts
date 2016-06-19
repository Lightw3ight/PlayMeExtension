import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { UserInfoService } from './user-info.service';

describe('UserInfo Service', () => {
  beforeEachProviders(() => [UserInfoService]);

  it('should ...',
      inject([UserInfoService], (service: UserInfoService) => {
    expect(service).toBeTruthy();
  }));
});
