import { CouncilGroup } from './../models/council-group';
import { AlertService } from './alert/alert.service';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, Http, ConnectionBackend, ResponseOptions, XHRBackend, Response, } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ServicesUtilitiesService } from './services-utilities.service';


describe('ServicesUtilitiesService', () => {
  let councilGroup: CouncilGroup;


  beforeEach(() => {
    councilGroup = new CouncilGroup;
    TestBed.configureTestingModule({
      providers: [ServicesUtilitiesService, AlertService,{ provide: XHRBackend, useClass: MockBackend },],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([ServicesUtilitiesService], (service: ServicesUtilitiesService) => {
    expect(service).toBeTruthy();
  }));

  it('Test Handle Error', inject([ServicesUtilitiesService], (service: ServicesUtilitiesService) => {
    expect(service.handleError).toThrow();
  }));

});
