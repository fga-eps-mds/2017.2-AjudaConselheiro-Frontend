import { Scheduling } from './../../models/scheduling.model';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../user/user.service';
import { AlertService } from '../alert/alert.service';
import { ServicesUtilitiesService } from '../services-utilities/services-utilities.service';
import { Post, User } from '../../models/index';



@Injectable()
export class SchedulingService extends ServicesUtilitiesService {

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'appToken': localStorage.getItem('token'),
    'appIdentifier': 462
  });

  options: RequestOptions = new RequestOptions({ headers: this.headers });

  private baseURL = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens?codAplicativo=462&codTiposPostagem=137';

  constructor(private http: Http,
    private alertService: AlertService,
    private userService: UserService
  ) {
    super();
  }

  getSchedulings(): Observable<Post> {
    const thereIsToken = localStorage.getItem('token');
    if (thereIsToken) {
      return this.http.get(this.baseURL, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    } else {
      this.alertService.warn('Você precisa estar logado');
    }
  }

  newScheduling(scheduling: Scheduling): void {
    const schedulings = this.getSchedulings();
    scheduling.id = new Date().getTime();
    localStorage['schedulings'] = JSON.stringify(schedulings);
  }




}
