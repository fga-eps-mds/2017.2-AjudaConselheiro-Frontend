import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Scheduling } from '../models/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SchoolService {

    options: RequestOptions = new  RequestOptions(
      new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Basic'
      })
    );

    constructor(private http: Http) { }

    searchSchool(): Observable<Array<Object>> {
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
