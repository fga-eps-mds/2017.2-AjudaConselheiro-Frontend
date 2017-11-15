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
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private alertService: AlertService,
    private router: Router, private profileService: ProfileService,
    private authService: AuthenticationService) {
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
    .map((response: Response) => {
      // Parsing the user cod found in response headers
      const parsedHeaders = new Headers(response.headers);
      const locationResponse = parsedHeaders.get('location');
      const userCod = this.extractResponseUserCod(locationResponse);

      // Login is needed for creating a profile
      if (userCod) {
        this.authService.login(body.email, body.senha).subscribe((loginData) => {
          this.setInitialProfile(userCod, loginData[0]);
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
    return this.http.put(this.url + user.cod, user)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  sendNewPassword(): Observable <string> {
    const loggedUser = this.getLoggedUser();

    if (loggedUser) {
      const recoverURL = `${this.url + '/redefinirSenha'
        + '?email=' + loggedUser.email}`;

      // Needed for filling POST() params
      const emptyBody = JSON.stringify({});

      return this.http.post(recoverURL, {body: emptyBody})
        .map(res => this.extractData(res))
        .catch(this.handleError);

    } else {
      console.error('You must be logged to ask for a new password!');
      return new Observable <string>();
    }
  }

  delete(cod: Number): Observable<String> {
    const url = `${this.url + '?codAplicativo=462 &'}/${cod}`;
    return this.http.delete(url, this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  private setInitialProfile(userCod: string, token: any) {
    // Sets the needed userToken from authentication, necessary for profiles POST
    localStorage.setItem('token', token);

    // Creating the user profile
    this.profileService.setUserProfile({}, userCod).subscribe();

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
