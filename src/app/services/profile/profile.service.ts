import { UserService } from './../user/user.service';
import { AlertService } from './../alert/alert.service';
import { Http,  Headers ,RequestOptions } from '@angular/http';
import { Post } from './../../models/posts/post.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ServicesUtilitiesService } from '../services-utilities.service';

@Injectable()
export class ProfileService extends ServicesUtilitiesService{


  private userCod =  this.getUserCod();
  private baseURL = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/'+ this.userCod +'/perfil';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'appToken': localStorage.getItem('token'),
  });

  private testProfile = 243;

  options: RequestOptions = new RequestOptions({ headers: this.headers });
  
  constructor(private http: Http,
    private alertService: AlertService,
    private userService: UserService) {
    super();
  }
  savePost(Data: any): Observable<Post> {
    const codUser = this.getUserCod();

    if (codUser) {
      const body = this.formatPostBody(Data);

      return this.http.post(this.baseURL, body, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    } else {
      console.error('You cannot create a post without login first!');
      this.alertService.warn('Você precisa estar logado');
    }

    return new Observable<Post>();
  }

  // The function below just take any JS Object and transforms it to a valid JSON
  private formatPostBody(Data: any) {
    const validBody = {
      'camposAdicionais': Data,
      'tipoPerfil': {
      'codTipoPerfil': this.testProfile,
       }
    };

    return JSON.stringify(validBody);
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
