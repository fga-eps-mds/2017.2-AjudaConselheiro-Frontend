import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { AlertService } from '../../services/alert/alert.service';
import { ServicesUtilitiesService } from '../../services/services-utilities/services-utilities.service';
import { Notification } from '../../models/notification';

@Injectable()
export class NotificationService extends ServicesUtilitiesService {
  private headers: Headers = null;
  private request: RequestOptions = null;
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/notificacoes';
  private notificationJson: String;

  constructor(
    private http: Http,
    private alertService: AlertService) {
    super();
  }

  createNotification(notification: Notification): any {
    const thereIsToken = localStorage.getItem('token');
    this.headers = new Headers ({
      'Content-Type': 'application/json',
      'appToken': thereIsToken
    });
    this.request = new RequestOptions({ headers: this.headers });
    this.notificationJson = this.createJson(notification);
    return this.http.post(this.url, this.notificationJson, this.request)
    .map(this.extractData)
    .catch(this.handleError);

  }

  createJson (notification: Notification): String {
    const json = {
      'JSON': {
        'autor': {
          'codPessoa': notification.author
        },
        'tipo': notification.type,
      },
      'descricao': notification.description,
      'destinatario': {
        'codPessoa': notification.recipient
      }
    };
    return JSON.stringify(json);
  }

}
