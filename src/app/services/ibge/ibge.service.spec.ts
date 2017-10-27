import { TestBed, inject, fakeAsync } from '@angular/core/testing';
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
  let service: IbgeService;

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
    service = TestBed.get(IbgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a string without quotes', () => {
    const withQuotes = 'a\"Normal\"String\"With\"Quotes?';
    const withoutQuotes = 'aNormalStringWithQuotes?';

    expect(service.takeQuoteOff(withQuotes)).toEqual(withoutQuotes);
  });

  it('should return a sorted array with states', () => {
    const state1 = { sigla: 'DF' }, state2 = { sigla: 'GO' };
    const sorted = [state1, state2, state2], unsorted = [state2, state2, state1];

    unsorted.sort(service.sortingStates);

    expect(unsorted).toEqual(sorted);
  });

  it('should have a city name on cities attribute', () => {
    const city = [{
      nome: 'Brasília',
      uf: 'DF'
    }];

    service.filterCityName(city);
    expect(service.cities[0]).toEqual(city[0].nome);
  });

  it('should have an state on states attibute', () => {
    const state = {
      id: 1,
      sigla: 'AC'
    }, stateAsExpected = new State();

    stateAsExpected.id = '1';
    stateAsExpected.sigla = 'AC';
    service.filterState([state]);

    expect(service.states[0]).toEqual(stateAsExpected);
  });

  it('correctly handles error', () => {
    const spy = spyOn(console, 'log');
    const error1 = { status: 'Bad Request 500'},
          error2 = { status: 'Bad Request 500', message: 'Message'};

    service.handleError(error1);
    service.handleError(error2);

    expect(spy).toHaveBeenCalledWith(error1.status);
    expect(spy).toHaveBeenCalledWith(error2.status);
  });

});
