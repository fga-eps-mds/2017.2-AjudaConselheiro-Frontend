import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { User } from '../../models/index';

import { AlertService } from './../alert/alert.service';
import { ProfileService } from '../profile/profile.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { ServicesUtilitiesService } from './../services-utilities/services-utilities.service';

@Injectable()
export class UserService extends ServicesUtilitiesService {

  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  updateHeaders: Headers = new Headers({
    'Content-Type': 'application/json',
    'appToken': localStorage.getItem('token')
   });
  updateOptions: RequestOptions = new RequestOptions({ headers: this.updateHeaders });
  codApplicativo = 'codAplicativo=462';

  constructor(private http: Http, private alertService: AlertService,
    private router: Router, private profileService: ProfileService,
    private authService: AuthenticationService) {
    super();
  }

  authenticationService: AuthenticationService;

  getUsers(): any {
    return this.http.get(this.url + '?' + this.codApplicativo, this.options)
      .map((response: Response) => this.extractData(response))
      .catch(this.handleError);
  }

  getUser(id: number) {
    return this.http.get(this.url + id)
      .map((response: Response) => this.extractData(response))
      .catch(this.handleError);
  }

  createUser (user: User, cpf: string): any {
    const body = {
      'email': user.email,
      'biografia': user.biografia,
      'nomeCompleto': user.nomeCompleto,
      'nomeUsuario': user.nomeUsuario,
      'CEP': user.CEP,
      'senha': user.senha
    };

    return this.http.post(this.url, JSON.stringify(body), this.options)
    .map((response: Response) => {
      // Parsing the user cod found in response headers
      const parsedHeaders = new Headers(response.headers);
      const locationResponse = parsedHeaders.get('location');
      const userCod = this.extractResponseUserCod(locationResponse);

      // Login is needed for creating a profile
      if (userCod) {
        this.authService.loginWithoutProfile(body.email, body.senha).subscribe((loginData) => {
          this.setInitialProfile(userCod, cpf, loginData[0]);
        });

        return this.extractData(response);
      } else {
        console.error('User created but we could not extract location (id) cod!');
        return null;
      }
    })
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
    };

    return this.http.put(this.url + '/' + cod, JSON.stringify(body), this.updateOptions)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  sendNewPassword(email: string): Observable <string> {
    /* tslint:disable:max-line-length */
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    const validEmail = regexEmail.test(email);

    if (validEmail) {
      const recoverURL = `${this.url + '/redefinirSenha'
        + '?email=' + email}`;

      return this.http.post(recoverURL, {body: ''})
        .map(res => this.extractData(res))
        .catch(this.handleError);

    } else {
      console.error('Email digitado é inválido!');
      return new Observable <string>();
    }
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

  updateAdditionalFields(telefone: number, segmento: string) {
    const cod = this.getUserCod();

    const headers: Headers = new Headers ({
      'Content-Type': 'application/json',
      'appToken': localStorage.getItem('token')
     });

    const options: RequestOptions = new RequestOptions({ headers: headers });

    const body = {
      'camposAdicionais': 'Telefone ' + telefone + '\n' + 'Segmento' + segmento + '\n',
      'tipoPerfil': {
        'codTipoPerfil': 243
      }
    };

    return this.http.put(this.url + '/' + cod + '/perfil', JSON.stringify(body), options)
    .map((response: Response) => response.json())
    .catch(this.handleError);

  }

  getProfilePhoto() {
    const cod = this.getUserCod();

    return this.http.get(this.url + '/' + cod + '/fotoPerfil')
    .map((response: Response) => response.json())
    .catch(this.handleError);
  }

  delete(cod: Number): Observable<String> {
    const headers: Headers = new Headers({
      'appIdentifier': 462,
      'appToken': localStorage.getItem('token')
    });

    const options: RequestOptions = new RequestOptions({ headers: headers });
    const url = this.url + '/' + cod + '/perfil';

    return this.http.delete(url, options)
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

      // Checks if there's a user and if this user has a 'email' attribute.
      if (user && 'email' in user) {
        return user.email;
      }

      return null;
    }

    getUserName() {
      const user = this.getLoggedUser();


      // Checks if there's a user and if this user has a 'nomeCompleto' attribute.
      if (user && 'nomeCompleto' in user) {
        return user.nomeCompleto;
      }

      return null;
    }

    private setInitialProfile(userCod: string, cpf: string, token: any) {
    // Sets the needed userToken from authentication, necessary for profiles POST
    localStorage.setItem('token', token);

    // Creating the user profile
    this.profileService.setUserProfile('CPF: ' + cpf, userCod, 243, localStorage.getItem('token')).subscribe();

      // Removing the login data - For sucess and fail
      localStorage.removeItem('token');
  }

  private extractResponseUserCod(locationString: string) {
    const userCodRegex = /http:\/\/mobile-aceite\.tcu\.gov\.br\/appCivicoRS\/rest\/pessoas\/(\d+)/i;
    const regexMatch = userCodRegex.exec(locationString);

    if (regexMatch) {
      const userCod = regexMatch[1];
      return userCod;
    } else {
      return null;
    }
  }
}
