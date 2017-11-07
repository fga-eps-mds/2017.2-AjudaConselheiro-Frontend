import { Scheduling } from './../../models/scheduling.model';
import { UserService } from './../user/user.service';
import { AlertService } from './../alert/alert.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Post } from './../../models/posts/post.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ServicesUtilitiesService } from '../services-utilities/services-utilities.service';
import { ProfileService } from './../profile/profile.service';

@Injectable()
export class SchedulingService extends ServicesUtilitiesService {

  private profileService: ProfileService;
  private userCod = this.profileService.getUserCod();
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens';
  private headers: Headers = null;
  private request: RequestOptions = null;
  private ehPresidente = false;

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }

  createUserProfile(scheduling: Scheduling) {

    this.headers = new Headers({
      'Content-Type': 'application/json',
      'appToken': localStorage.getItem('token')
    });

    this.request = new RequestOptions({ headers: this.headers });

    const body = {

      'autor': {
        'codPessoa': this.userCod
      },
      'codTipoObjetoDestino': 143,
      'tipo': {
        'codTipoPostagem': 385
      }

    };

    return this.http.post(this.url, JSON.stringify(body), this.request)
      .map(response => this.extractData(response))
      .catch(this.handleError);
  }

  // listAllScheculings(): Scheduling[] {
  //   const schedulings = localStorage['schedulings'];
  //   return schedulings ? JSON.parse(schedulings) : [];
  // }

  // newScheduling(scheduling: Scheduling): void {
  //   const schedulings = this.listAllScheculings();
  //   scheduling.id = new Date().getTime();
  //   schedulings.push(scheduling);
  //   localStorage['schedulings'] = JSON.stringify(schedulings);
  // }

  // updateScheduling(scheduling: Scheduling): void {
  //   const schedulings: Scheduling[] = this.listAllScheculings();
  //   schedulings.forEach((obj, index, objs) => {
  //     if (scheduling.id === obj.id) {
  //       objs[index] = scheduling;
  //     }
  //   });
  //   localStorage['schedulings'] = JSON.stringify(schedulings);
  // }

  // searchSchedulingId(id: number): Scheduling {
  //   const schedulings: Scheduling[] = this.listAllScheculings();
  //   return schedulings.find(scheduling => scheduling.id === id);
  // }

  // deleteScheduling(id: number): void {
  //   let schedulings: Scheduling[] = this.listAllScheculings();
  //   schedulings = schedulings.filter(scheduling => scheduling.id !== id);
  //   localStorage['schedulings'] = JSON.stringify(schedulings);
  // }
}
