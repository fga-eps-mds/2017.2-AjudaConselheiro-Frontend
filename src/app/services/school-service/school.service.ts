import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Scheduling } from '../../models/index';
import { ServicesUtilitiesService } from '.././services-utilities.service';
import { AlertService } from '.././alert/alert.service';
import { SearchSchool } from '../../models/search-school.model';

@Injectable()
export class SchoolService extends ServicesUtilitiesService {

  hasSchool = new BehaviorSubject<boolean>(null);
  hasSchool$ = this.hasSchool.asObservable();

  private options: RequestOptions = new  RequestOptions();
  private url = 'http://educacao.dadosabertosbr.com/api';

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }

  searchSchool(search: SearchSchool): Observable<Array<Object>> {
    const searchParams = new URLSearchParams();
    searchParams.append('codigo', search.code);
    searchParams.append('estado', search.state);
    searchParams.append('nome', search.name);
    searchParams.append('cidade', search.city);
    searchParams.append('situacaoFuncionamento', search.situation);

    this.options.params = searchParams;
    console.log(this.options);
    return this.http.get(this.url + '/escolas/buscaavancada?', this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  searchCity(state: String):  Observable<Array<Object>> {
    return this.http.get(this.url + '/cidades/' + state, this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  getSchool(school: string) {
    console.log('Escola escolhida: ', school);
    return school;
  }

  setHasSchool(hasSchool: boolean) {
    this.hasSchool.next(hasSchool);
  }
}
