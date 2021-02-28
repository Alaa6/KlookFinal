import { TestBed } from '@angular/core/testing';

import { RelaxServiceService } from './relax-service.service';

describe('RelaxServiceService', () => {
  let service: RelaxServiceService;

  beforeEach(() => {n
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelaxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
