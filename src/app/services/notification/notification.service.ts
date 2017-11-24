import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { AlertService } from '../../services/alert/alert.service';
import { ServicesUtilitiesService } from '../../services/services-utilities/services-utilities.service';

@Injectable()
export class CouncilGroupService extends ServicesUtilitiesService {
  private headers: Headers = null;
  private request: RequestOptions = null;
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/notificacoes';

  constructor(
    private http: Http,
    private alertService: AlertService) {
    super();
  }

  createNotification() {

  }
}
