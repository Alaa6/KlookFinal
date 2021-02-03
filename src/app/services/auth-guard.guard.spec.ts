import { TestBed } from '@angular/core/testing';

import { AuthGuardGuard } from './auth-guard.guard';

describe('AuthGuardService', () => {
  let service: AuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
