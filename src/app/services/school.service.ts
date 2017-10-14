import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Scheduling } from '../models/index';
import { Observable } from 'rxjs/Observable';
import { Search } from '../models/search.model';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SchoolService {

    options: RequestOptions = new  RequestOptions();

    constructor(private http: Http) { }

    searchSchool(search: Search): Observable<Array<Object>> {
      var searchParams = new URLSearchParams();
      searchParams.append('codigo', search.code);
      searchParams.append('estado', search.state);
      searchParams.append('nome', search.name);
      searchParams.append('cidade', search.city);
      searchParams.append('situacaoFuncionamento', search.situation);

      this.options.params = searchParams;
      console.log(this.options)
      return this.http
      .get('http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?', this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
    }

    searchCity(state: String):  Observable<Array<Object>> {
      return this.http
      .get('http://educacao.dadosabertosbr.com/api/cidades/'+ state, this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
    }

    private extractData(res: Response) {
      const body = res.json();
      console.log(body);
      return body || {};
    }

    private handleError(error: any) {
      const errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
}
