import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/index';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

import { ServicesUtilitiesService } from './../services-utilities/services-utilities.service';
import { AlertService } from './../alert/alert.service';
import { AuthenticationService } from './../../services/index';


@Injectable()
export class UserService extends ServicesUtilitiesService {

  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(
    private http: Http,
    private alertService: AlertService,
    private router: Router) {

      super();
  }

  authenticationService: AuthenticationService;

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
      'biografia': user.biografia,
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
  getPerfilUser() {
    const localUserValue = localStorage.getItem('Profile');
    if (localUserValue) {
      return JSON.parse(localUserValue);
    }
}
  updateUser(user: User) {
    const cod = this.getUserCod();
    const href = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/' + cod;

    const body = {
      'CEP': user.CEP,
      'biografia': user.biografia,
      'links': [
        {
          'href': href,
          'rel': 'string',
          'templated': true
        }
      ],
      'nomeCompleto': user.nomeCompleto,
      'nomeUsuario': user.nomeUsuario,
      'sexo': user.sexo
    }

    const updateHeaders: Headers = new Headers({
      'Content-Type': 'application/json',
      'appToken': localStorage.getItem('token')
     });
    const updateOptions: RequestOptions = new RequestOptions({ headers: updateHeaders });

    return this.http.put(this.url + '/' + cod, JSON.stringify(body), updateOptions)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  updatePassword(currentPassword: string, newPassword: string) {
    const cod = this.getUserCod();

    const passwordHeaders: Headers = new Headers({
      'Content-Type': 'application/json',
      'appToken': localStorage.getItem('token'),
      'email': this.getUserEmail(),
      'senhaAtual': currentPassword,
      'novaSenha': newPassword
     });
    const passwordOptions: RequestOptions = new RequestOptions({ headers: passwordHeaders });

    return this.http.post(this.url + '/' + cod + '/definirNovaSenha', '' , passwordOptions)
    .map((response: Response) => response.json())
    .catch(this.handleError);

  }


  delete(cod: Number): Observable<String> {
    const url = `${this.url + '?codAplicativo=462 &'}/${cod}`;
    return this.http.delete(url, this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  // This function checks if there's a logged user and if it has a 'cod'
    // Output: The user 'cod' or 'null' if there's no cod
    getUserCod() {
      const user = this.getLoggedUser();

      // Checks if there's a user and if this user has a 'cod' attribute.
      if (user && 'cod' in user) {
        return user.cod;
      }

      return null;
    }

    getUserEmail() {
      const user = this.getLoggedUser();

      // Checks if there's a user and if this user has a 'cod' attribute.
      if (user && 'email' in user) {
        return user.email;
      }

      return null;
    }
}
