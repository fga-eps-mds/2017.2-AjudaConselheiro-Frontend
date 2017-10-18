import { TestBed, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../../services/alert/alert.service';
import { State } from '../../models/index';
import { IbgeService } from './ibge.service';
import { RouterTestingModule } from '@angular/router/testing';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

describe('IbgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        IbgeService,
        AlertService
      ]
    });
  });

  it('should be created', inject([IbgeService], (service: IbgeService) => {
    expect(service).toBeTruthy();
  }));
});
