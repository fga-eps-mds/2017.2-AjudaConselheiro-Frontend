import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ServicesUtilitiesService, AlertService } from '../../services/index';

import { Post, User } from '../../models/index';


@Injectable()
export class PostService extends ServicesUtilitiesService {

  private baseURL = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens';
  private postURL = this.baseURL + '/conteudos';

  // Both POST and GET needs these headers
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'appToken': localStorage.getItem('token'),
    'appIdentifier': 462
  });

  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }

    getPosts(): Observable<Post> {
      if (this.headers.get('appToken')) {
        return this.http.get(this.baseURL, this.options)
          .map(this.extractData)
          .catch(this.handleError);
      } else {
        this.alertService.warn('Você precisa estar logado');
      }
    }

    savePost(data: any): Observable<Post> {
      const body = this.formatPostBody(data);

      return this.http.post(this.postURL, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
    }

    // The function below just take any JS Object and transforms it to a valid JSON
    private formatPostBody(jsonData: any) {
      const validBody = {
        'conteudo': {
          'JSON': jsonData
        },
        'postagem': {
          'autor': {
            'codPessoa': 5676 // Valid for fake user 'Gustavo'
          },
          'tipo': {
            'codTipoPostagem': 377 // Cod for testing
          }
        }
      };

      return JSON.stringify(validBody);
    }
}
