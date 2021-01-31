import { TestBed } from '@angular/core/testing';

import { EuropeTrainService } from './europe-train.service';

describe('EuropeTrainService', () => {
  let service: EuropeTrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuropeTrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
