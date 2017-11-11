import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { Scheduling } from '../../models/index';
import { ServicesUtilitiesService } from './../services-utilities/services-utilities.service';
import { School } from '../../models/school.model';

@Injectable()
export class SchoolService extends ServicesUtilitiesService {

  options: RequestOptions = new  RequestOptions();

  constructor(private http: Http) {
    super();
  }

  searchSchool(school: School): Observable<Array<Object>> {
    const searchParams = new URLSearchParams();
    searchParams.append('codigo', school.code);
    searchParams.append('estado', school.state);
    searchParams.append('nome', school.name);
    searchParams.append('cidade', school.city);
    searchParams.append('situacaoFuncionamento', school.situation);

    this.options.params = searchParams;
    console.log(this.options);
    return this.http.get('http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?', this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  searchCity(state: String):  Observable<Array<Object>> {
    return this.http.get('http://educacao.dadosabertosbr.com/api/cidades/' + state, this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }
}
