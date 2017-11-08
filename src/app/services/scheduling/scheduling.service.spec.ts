import { Http, HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { SchedulingService } from './scheduling.service';
import { AlertService } from './../alert/alert.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('SchedulingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SchedulingService,
        AlertService],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([SchedulingService], (service: SchedulingService) => {
    expect(service).toBeTruthy();
  }));
});
