import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { User } from '../models/index';
import { ServicesUtilitiesService } from './services-utilities.service';
import { AlertService } from './alert/alert.service';

@Injectable()
export class UserService extends ServicesUtilitiesService {

  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.url + '?codAplicativo=462')
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getUser(id: number) {
    return this.http.get(this.url + id, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  createUser(user: User): any {
    const body = {
      'email': user.email,
      'nomeCompleto': user.nomeCompleto,
      'nomeUsuario': user.nomeUsuario,
      'CEP': user.CEP,
      'senha': user.senha
    };
    return this.http.post(this.url, JSON.stringify(body), this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  updateUser(user: User) {
    return this.http.put(this.url + user.cod, user, this.jwt())
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  delete(cod: Number): Observable<String> {
    const url = `${this.url + '?codAplicativo=462 &'}/${cod}`;
    return this.http.delete(url, this.options)
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
}
