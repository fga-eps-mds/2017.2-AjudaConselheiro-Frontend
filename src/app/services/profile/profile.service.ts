import { UserService } from './../user/user.service';
import { AlertService } from './../alert/alert.service';
import { Http,  Headers , RequestOptions, Response } from '@angular/http';
import { Post } from './../../models/posts/post.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ServicesUtilitiesService } from '../services-utilities/services-utilities.service';

@Injectable()
export class ProfileService extends ServicesUtilitiesService {

  private id =  this.getUserCod();
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/' + this.id + '/perfil';
  private headers: Headers = null;
  private request: RequestOptions = null;

  private codPresident = 238;
  private codCounselor = 237;
  private codProfileTest = 243;
  private codNotAuthorized = 246;

  constructor(private http: Http,
    private alertService: AlertService,
    private userService: UserService) {
    super();
  }

  createUserProfile(cpf: any) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'appToken': localStorage.getItem('token')
    });

    const additionalData = ({CPF: cpf});
    this.request = new RequestOptions({ headers: this.headers });

    const body = {
      'camposAdicionais': JSON.stringify(additionalData),
      'tipoPerfil': {
        'codTipoPerfil': this.codProfileTest,
      }
    };

    return this.http.post(this.url, JSON.stringify(body), this.request)
      .map(response => this.extractData(response))
      .catch(this.handleError);
  }
  getProfile() {
        this.headers = new Headers({
          'Content-Type': 'application/json',
          'appIdentifier': 462,
        });
        this.request = new RequestOptions({ headers: this.headers });
        return this.http.get(this.url, this.request)
        .map((response: Response) => response.json())
          .catch(this.handleError);
      }
  // This function checks if there's a logged user and if it has a 'cod'
  // Output: The user 'cod' or 'null' if there's no cod
  private getUserCod() {
    const user = this.userService.getLoggedUser();

    // Checks if there's a user and if this user has a 'cod' attribute.
    if (user && 'cod' in user) {
      return user.cod;
    }

    return null;
  }
}
