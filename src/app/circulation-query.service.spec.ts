import { TestBed } from '@angular/core/testing';

import { CirculationQueryService } from './circulation-query.service';

describe('CirculationQueryService', () => {
  let service: CirculationQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CirculationQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
