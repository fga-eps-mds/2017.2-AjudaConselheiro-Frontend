import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ServicesUtilitiesService, AlertService } from '../../services/index';

import { Post, User } from '../../models/index';


@Injectable()
export class PostService extends ServicesUtilitiesService {


  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json',
  'appToken': localStorage.getItem('token')});

  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }

    getPosts(): Observable<Post> {
      if (this.headers.get('appToken')) {
        return this.http.get(this.url, this.options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
      } else {
      this.alertService.warn('Você precisa estar logado');
    }
  }
}
