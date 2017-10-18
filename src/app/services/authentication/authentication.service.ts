import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AlertService } from '../../services/alert/alert.service';

@Injectable()
export class AuthenticationService {

  private headers: Headers;
  private options: RequestOptions;
  private token: any = null;
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/autenticar';

  constructor(private http: Http, private alertService: AlertService) { }

  login(email: string, password: string): Observable<any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'email': email, 'senha': password
    });

    this.options = new RequestOptions({ headers: this.headers });

    return this.http.get(this.url, this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  hasToken(): boolean {
    return localStorage.hasOwnProperty('token');
  }

  private extractData(res: Response) {
    const body = res.json();
    this.token = res.headers.get('apptoken');
    console.log(body);
    console.log('token: ', this.token);

    return this.token || {};
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(error);
  }
}
