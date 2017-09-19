import { TestBed, inject } from '@angular/core/testing';

import { CounselorService } from './counselor.service';

describe('CounselorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounselorService]
    });
  });

  it('should be created', inject([CounselorService], (service: CounselorService) => {
    expect(service).toBeTruthy();
  }));
});
