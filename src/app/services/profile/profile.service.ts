import { UserService } from './../user/user.service';
import { AlertService } from './../alert/alert.service';
import { Http,  Headers , RequestOptions } from '@angular/http';
import { Post } from './../../models/posts/post.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ServicesUtilitiesService } from '../services-utilities.service';

@Injectable()
export class ProfileService extends ServicesUtilitiesService{

  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/' + this.getUserCod() + '/perfil';
  private headers: Headers = null;
  private request: RequestOptions = null;

  constructor(private http: Http,
    private alertService: AlertService,
    private userService: UserService) {
    super();
  }

  createUserProfile(cpf: any): Observable<Post> {

    this.headers = new Headers({
      'Content-Type': 'application/json',
      'appToken': localStorage.getItem('token')
    });

    this.request = new RequestOptions({ headers: this.headers });

    const body = {
      'camposAdicionais': 'CPF: ' + cpf,
      'tipoPerfil': {
        'codTipoPerfil': 243,
      }
    };

    return this.http.post(this.url, JSON.stringify(body), this.request)
      .map(response => this.extractData(response))
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
