import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { SchoolService } from './school.service';
import { AlertService } from '../alert/alert.service';

describe('SchoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolService, AlertService],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([SchoolService], (service: SchoolService) => {
    expect(service).toBeTruthy();
  }));
});
