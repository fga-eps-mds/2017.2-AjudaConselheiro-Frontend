import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas?codAplicativo=001')
      .map((response: Response) => response.json());
  }

  getUser(id: number) {
    return this.http.get('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas' + id,
      this.jwt()).map((response: Response) => response.json());
  }

  createUser(user: User): Observable<User> {

    const body = JSON.stringify(user);

    console.log('servico');
    return this.http
      .post('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas', body)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    console.log(body);
    return body || {};
  }

  updateUser(user: User) {
    return this.http.put('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas' + user.cod,
      user, this.jwt()).map((response: Response) => response.json());
  }

  delete(cod: Number): Observable<String> {
    const url = `${'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas?codAplicativo=462 &'}/${cod}`;
    return this.http
      .delete(url, this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
