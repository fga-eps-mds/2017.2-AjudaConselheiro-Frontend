import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ServicesUtilitiesService } from '../../services/services-utilities.service';

import { Post } from '../../models/index';


@Injectable()
export class PostService extends ServicesUtilitiesService {

  private post: Post;
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens?codAplicativo=462';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
    super();
  }

  getPosts(): Observable<Post> {
    return this.http.get(this.url)
    .map((response: Response) => response.json())
    .catch(this.handleError);
  }

}
