import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../../services/alert/alert.service';
import { State } from '../../models/index';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class IbgeService {
  states = new Array<State>();
  cities = new Array<String>();

  constructor(
    private http: Http,
    private alertService: AlertService
  ) { }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.log(error.status);

    return Observable.throw(error);
  }

  statesRequest(): any {
    this.searchStates();
    return this.states;
  }

  citiesRequest(state: string): any {
    this.cities = new Array<string>();
    this.searchCities(state);
    return this.cities;
  }

  getStates():  Observable<Array<Object>> {
    return this.http
    .get('http://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .map(res => res.json())
    .catch(this.handleError);
  }

  getCities(state: string):  Observable<Array<Object>> {
    return this.http
    .get('http://servicodados.ibge.gov.br/api/v1/localidades/estados/' + state + '/municipios')
    .map(res => res.json())
    .catch(this.handleError);
  }

  searchStates(): void {
    this.getStates()
      .subscribe(
          result => {
            result.sort(this.sortingStates);
            this.filterState(result);
          },
          error => {
            alert(error);
            console.error(error);
      });
  }

  searchCities(state: string): void {
    this.getCities(state)
      .subscribe(
          result => {
            this.filterCityName(result);
          },
          error => {
            alert(error);
            console.error(error);
      });
  }

  filterState(result: Array<Object>): void {
    result.forEach(subitem => {
      const siglaUntreated = JSON.stringify(subitem['sigla']);
      const codigoUntreated = JSON.stringify(subitem['id']);

      const state = new State(codigoUntreated, this.takeQuoteOff(siglaUntreated));

      this.states.push(state);
    });
  }

  filterCityName(result: Array<Object>): void {
    result.forEach(city => {
      const nameUntreated = JSON.stringify(city['nome']);
      const cityName =  this.takeQuoteOff(nameUntreated);

      this.cities.push(cityName);
    });
  }

  takeQuoteOff(untreated: string): string {
    let name = untreated;
    const quote = /\"/g;

    name = name.replace(quote, '');

    return name;
  }

  sortingStates(firstState: State, secondState: State) {
    if (firstState.sigla < secondState.sigla) {
      return -1;
    }
    if (firstState.sigla > secondState.sigla) {
      return 1;
    }
    return 0;
  }
}
