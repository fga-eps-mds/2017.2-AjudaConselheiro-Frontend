import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { Scheduling } from '../models/index';
import { ServicesUtilitiesService } from './services-utilities.service';
import { Search } from '../models/search.model';

@Injectable()
export class SchoolService {

  options: RequestOptions = new  RequestOptions();
  private utilService: ServicesUtilitiesService;

  constructor(private http: Http) { }

  searchSchool(search: Search): Observable<Array<Object>> {
    const searchParams = new URLSearchParams();
    searchParams.append('codigo', search.code);
    searchParams.append('estado', search.state);
    searchParams.append('nome', search.name);
    searchParams.append('cidade', search.city);
    searchParams.append('situacaoFuncionamento', search.situation);

    this.options.params = searchParams;
    console.log(this.options);
    return this.http.get('http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?', this.options)
      .map(res => this.utilService.extractData(res))
      .catch(this.utilService.handleError);
  }

  searchCity(state: String):  Observable<Array<Object>> {
    return this.http.get('http://educacao.dadosabertosbr.com/api/cidades/' + state, this.options)
      .map(res => this.utilService.extractData(res))
      .catch(this.utilService.handleError);
  }
}
