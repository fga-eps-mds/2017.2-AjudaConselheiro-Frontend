import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';

import { SchoolService } from './school.service';

describe('SchoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be created', inject([SchoolService], (service: SchoolService) => {
    expect(service).toBeTruthy();
  }));
});
