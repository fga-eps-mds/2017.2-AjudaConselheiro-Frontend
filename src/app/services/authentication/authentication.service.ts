import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AlertService } from '../alert/alert.service';
import { ServicesUtilitiesService } from '../services-utilities.service';

@Injectable()
export class AuthenticationService extends ServicesUtilitiesService {

  private headers: Headers;
  private options: RequestOptions;
  private token: any = null;
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/autenticar';

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }

  login(email: string, password: string): Observable<any> {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'email': email, 'senha': password
    });

    this.options = new RequestOptions({ headers: this.headers });

    return this.http.get(this.url, this.options)
      .map(res => [this.getToken(res), res])
      .catch(this.handleError);
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userData');
  }

  hasToken(): boolean {
    return localStorage.hasOwnProperty('token');
  }

  getToken(res: Response) {
    this.token = res.headers.get('apptoken');

    return this.token || {};
  }

}
