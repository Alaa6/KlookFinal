import { TestBed } from '@angular/core/testing';

import { SpinnerActionService } from './spinner-action.service';

describe('SpinnerActionService', () => {
  let service: SpinnerActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
