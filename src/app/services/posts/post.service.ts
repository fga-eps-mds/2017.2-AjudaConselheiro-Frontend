import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ServicesUtilitiesService, AlertService, UserService } from '../../services/index';

import { Post, User } from '../../models/index';


@Injectable()
export class PostService extends ServicesUtilitiesService {

  private baseURL = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens/';
  private postURL = this.baseURL + 'conteudos';

  // These are 'tipoPostagem' that already been set for this app, in the API
  private incompleteChecklist = 375;
  private completeChecklist = 376;
  private testChecklist = 377;
  private codPostagem = 6932;
  private codConteudo = 5344;

  // Both POST and GET needs these headers
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'appToken': localStorage.getItem('token'),
    'appIdentifier': 462
  });

  options: RequestOptions = new RequestOptions({ headers: this.headers });

  constructor(private http: Http,
    private alertService: AlertService,
    private userService: UserService) {
      super();
  }

    // The params will be codPostagem: number, codConteudo: number

  getPosts(): Observable<Post> {
    const thereIsToken = localStorage.getItem('token');
    const contentURL = this.baseURL + this.codPostagem + '/conteudos/' + this.codConteudo;

    console.log (thereIsToken);

    if (thereIsToken) {
      return this.http.get(contentURL, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    } else {
      this.alertService.warn('Você precisa estar logado');
    }
  }

    savePost(data: any): Observable<Post> {
      const codUser = this.getUserCod();

      if (codUser) {
        const body = this.formatPostBody(data, codUser, this.testChecklist);

        return this.http.post(this.postURL, body, this.options)
          .map(this.extractData)
          .catch(this.handleError);
      } else {
        console.error('You cannot create a post without login first!');
        this.alertService.warn('Você precisa estar logado');
      }

      return new Observable<Post>();
    }

    updatePost(data: any): Observable<Post> {
      const codUser = this.getUserCod();

      if (codUser) {
        const body = this.formatUpdateBody(data);
        const updateURL = this.baseURL + this.codPostagem + '/conteudos/' + this.codConteudo;
        return this.http.put(updateURL, body, this.options)
          .map(this.extractData)
          .catch(this.handleError);
      } else {
        console.error('You cannot update a post without login first!');
        this.alertService.warn('Você precisa estar logado');
      }

      return new Observable<Post>();
    }

    // The function below just take any JS Object and transforms it to a valid JSON
    private formatPostBody(jsonData: any, codUser: number, codPost: number) {
      const validBody = {
        'conteudo': {
          'JSON': jsonData
        },
        'postagem': {
          'autor': {
            'codPessoa': codUser
          },
          'tipo': {
            'codTipoPostagem': codPost
          }
        }
      };

      return JSON.stringify(validBody);
    }

    private formatUpdateBody(jsonData: any) {
      const validBody = {
          'JSON':  jsonData,
          'texto': 'string',
          'valor': 0
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
