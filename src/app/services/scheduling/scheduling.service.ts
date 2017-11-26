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
  private updateURL = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens/';

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

  getScheduling() {
    const url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens/7220/conteudos/5611';

    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'appToken': localStorage.getItem('token'),
      });

    const getOptions: RequestOptions = new RequestOptions({ headers: headers });

    return this.http.get(url, getOptions)
    .map(this.extractData)
    .catch(this.handleError);
  }

  updateScheduling(scheduling: Scheduling, postText: string)  {
    const updateBody = {
      'JSON': JSON.stringify(scheduling),
      'texto': postText
    };

    const headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'appToken': localStorage.getItem('token'),
        });

    const updateOptions: RequestOptions = new RequestOptions({ headers: headers });

    return this.http.put(this.updateURL + '7220/conteudos/5611', JSON.stringify(updateBody), updateOptions)
    .map(this.extractData)
    .catch(this.handleError);
  }
}
