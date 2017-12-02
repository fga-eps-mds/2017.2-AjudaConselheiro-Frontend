import { AlertService } from './../alert/alert.service';
import { Http,  Headers , RequestOptions, Response } from '@angular/http';
import { Post } from './../../models/posts/post.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ServicesUtilitiesService } from '../services-utilities/services-utilities.service';

@Injectable()
export class ProfileService extends ServicesUtilitiesService {
  private headers: Headers = null;
  private request: RequestOptions = null;

  private codPresident = 238;
  private codCounselor = 237;
  private codProfileTest = 243;
  private codNotAuthorized = 246;
  private codAdmin = 249;

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }


  setUserProfile(additionalData: any, userCod: string, codProfile: number, token: any) {
    const url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/'
      + userCod + '/perfil';

    this.headers = new Headers({
      'Content-Type': 'application/json',
      'appToken': token
    });

    this.request = new RequestOptions({ headers: this.headers });

    const body = {
      'camposAdicionais': JSON.stringify(additionalData),
      'tipoPerfil': {
        // In production, change to this.codNotAuthorized
        'codTipoPerfil': codProfile,
      }
    };

    return this.http.post(url, JSON.stringify(body), this.request)
      .map(response => this.extractData(response))
      .catch(this.handleError);
  }

  getProfile(userCod: string) {
    const url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/'
    + userCod + '/perfil';

    this.headers = new Headers({
      'Content-Type': 'application/json',
      'appIdentifier': 462,
    });
    this.request = new RequestOptions({ headers: this.headers });
    return this.http.get(url, this.request)
    .map((response: Response) => response.json())
      .catch(this.handleError);
  }
}
