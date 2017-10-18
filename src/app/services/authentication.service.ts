import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private headers: Headers;
  private options: RequestOptions;
  private token: any;
  constructor(private http: Http) { }

    login(email: string, password: string): Observable<any> {
      this.headers = new Headers ({
        'Content-Type': 'application/json',
        'email': email, 'senha': password
      });

      this.options = new RequestOptions({ headers: this.headers });
      return this.http.get('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/autenticar', this.options)
      .map(res => this.extractData(res));
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    }

    get hasToken(): any {
      return localStorage.hasOwnProperty('token');
    }

    private extractData(res: Response) {
      const body = res.json();
      this.token = res.headers.get('apptoken');
      console.log(body);
      console.log(this.token);
      return this.token || {};
    }
}
