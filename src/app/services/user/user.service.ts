import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/index';
import { ServicesUtilitiesService } from './../services-utilities.service';
import { AlertService } from './../alert/alert.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService extends ServicesUtilitiesService {

  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'appToken': localStorage.getItem('token').toString()
  });
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
    return this.http.get(this.url + id)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  createUser (user: User): any {
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

  getLoggedUser() {
    const localUserValue = localStorage.getItem('userData');

    if (localUserValue) {
      return JSON.parse(localUserValue);
    } else {
      console.error('No logged user found!');
    }
  }

  updateUser(user: User) {
    return this.http.put(this.url + user.cod, user)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  delete(): any {
    console.log(this.url + '/' + this.getLoggedUser().cod);
    return this.http.delete(this.url + '/' + this.getLoggedUser().cod, this.options)
    .map(res => this.extractData(res))
    .catch(this.handleError);
  }
}
