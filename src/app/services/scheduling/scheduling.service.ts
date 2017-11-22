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

  newScheduling(scheduling: Scheduling): Observable<Scheduling> {
    const cod = this.userService.getUserCod();
    const sched = JSON.stringify(scheduling);
    const body = {
      'conteudo': {
        'JSON': sched,
        'texto': 'Agendamento',
        'valor': 0
      },
      'postagem': {
        'autor': {
          'codPessoa': cod
        },
        'tipo': {
          'codTipoPostagem': 137
        }
      }
    };

    return this.http.post(this.baseURL, JSON.stringify(body), this.options)
    .map(result => this.extractData(result))
    .catch(this.handleError);
  }

  getScheduling(): Observable<Scheduling[]> {

    const userCod = this.userService.getUserCod();
    const url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens';
    const query = '?codAutor=' + userCod + '&codTiposPostagem=137';

    return this.http.get(url + query, this.options)
    .map(this.extractData)
    .catch(this.handleError);
  }
}
