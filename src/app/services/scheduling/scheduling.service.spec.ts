import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

import { SchedulingService, AlertService, UserService } from '../../services/index';


describe('SchedulingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
      ],
      providers: [
        SchedulingService,
        AlertService,
        Http,
        ConnectionBackend,
        UserService
      ]
    });
  });

  it('should be created', inject([SchedulingService], (service: SchedulingService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});
