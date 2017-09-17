import { TestBed, inject } from '@angular/core/testing';

import { SchedulingService } from './scheduling.service';

describe('SchedulingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchedulingService]
    });
  });

  it('should be created', inject([SchedulingService], (service: SchedulingService) => {
    expect(service).toBeTruthy();
  }));
});
