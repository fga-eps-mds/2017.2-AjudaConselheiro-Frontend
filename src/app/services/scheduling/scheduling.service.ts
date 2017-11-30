import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { UserService } from '../user/user.service';
import { AlertService } from '../alert/alert.service';
import { ServicesUtilitiesService } from '../services-utilities/services-utilities.service';
import { Post, User, Scheduling } from '../../models/index';

@Injectable()
export class SchedulingService extends ServicesUtilitiesService {

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'appIdentifier': 462,
    'appToken': localStorage.getItem('token')
  });

  options: RequestOptions = new RequestOptions({ headers: this.headers });

  private baseURL = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens/conteudos';

  constructor(private http: Http,
    private alertService: AlertService,
    private userService: UserService,
  ) {
    super();
  }

  getSchedulings(): Observable<Scheduling> {
    const thereIsToken = localStorage.getItem('token');
    if (thereIsToken) {
      return this.http.get(this.baseURL, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    } else {
      this.alertService.warn('Você precisa estar logado');
    }
  }

  newScheduling(scheduling: Scheduling, postType: number, postText: string): Observable<Scheduling> {

    const cod = this.userService.getUserCod();
    const sched = JSON.stringify(scheduling);
    const body = {
      'conteudo': {
        'JSON': sched,
        'texto': postText,
        'valor': 0
      },
      'postagem': {
        'autor': {
          'codPessoa': cod
        },
        'tipo': {
          'codTipoPostagem': postType
        }
      }
    };

    return this.http.post(this.baseURL, JSON.stringify(body), this.options)
    .map(result => this.extractData(result))
    .catch(this.handleError);
  }

  getUserSchedulingData() {

    const userCod = this.userService.getUserCod();
    const url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens';
    const query = '?codAutor=' + userCod + '&codTiposPostagem=138&quantidadeDeItens=1000';

    return this.http.get(url + query, this.options)
    .map(this.extractData)
    .catch(this.handleError);
  }


  getCodPostContent(schedulingData: any) {
    const userCod = this.userService.getUserCod();

    // tslint:disable-next-line:prefer-const
    let codPostContent: any[] = [0];

    for (let index = 0; index < schedulingData.length; index++) {
      codPostContent[index] = schedulingData[index].conteudos[0].codConteudoPostagem;
    }
    console.log(codPostContent);
    return codPostContent;
  }

  getCodPost(schedulingData: any) {

    // tslint:disable-next-line:prefer-const
    let codPost: any[] = [0];

    for (let index = 0; index < schedulingData.length; index++) {
      codPost[index] = schedulingData[index].codPostagem;
    }
    console.log(codPost);
    return codPost;
  }

  getSchedulingPostContent(codPost: any, codPostContent: any) {
    const url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens/' + codPost + '/conteudos/' + codPostContent;

    return this.http.get(url, this.options)
    .map(this.extractData)
    .catch(this.handleError);
  }
}
