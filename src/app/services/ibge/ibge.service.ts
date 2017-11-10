import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { State } from '../../models/index';
import { AlertService } from '../../services/alert/alert.service';
import { ServicesUtilitiesService } from '../services-utilities/services-utilities.service';

@Injectable()
export class IbgeService extends ServicesUtilitiesService {
  states = new Array<State>();
  cities = new Array<String>();
  private url = 'http://servicodados.ibge.gov.br/api/v1/localidades/estados/';

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }

  getStates(): Observable<Array<Object>> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCities(state: string): Observable<Array<Object>> {
    return this.http.get(this.url + state + '/municipios')
      .map(this.extractData)
      .catch(this.handleError);
  }

  filterState(result: Array<Object>) {
    this.states = [];
    result.forEach(subitem => {
      const siglaUntreated = JSON.stringify(subitem['sigla']);
      const codigoUntreated = JSON.stringify(subitem['id']);

      const state = new State(codigoUntreated, this.removeQuotes(siglaUntreated));

      this.states.push(state);
    });
    return this.states;
  }

  filterCityName(result: Array<Object>) {
    this.cities = [];
    result.forEach(city => {
      const nameUntreated = JSON.stringify(city['nome']);
      const cityName = this.removeQuotes(nameUntreated);

      this.cities.push(cityName);
    });
    return this.cities;
  }

  removeQuotes(untreated: string): string {
    const quote = /\"/g;
    untreated = untreated.replace(quote, '');

    return untreated;
  }

  // Sort states array alphabetical A-Z
  sortArray(firstState: State, secondState: State) {
    if (firstState.sigla < secondState.sigla) {
      return -1;
    }
    if (firstState.sigla > secondState.sigla) {
      return 1;
    }
    return 0;
  }
}
