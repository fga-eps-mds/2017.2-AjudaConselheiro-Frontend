import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CouncilGroup } from '../../models/index';
import { AlertService } from '../../services/alert/alert.service';
import { ServicesUtilitiesService } from '../../services/services-utilities.service';

@Injectable()
export class CouncilGroupService extends ServicesUtilitiesService {
  private headers: Headers;
  private options: RequestOptions;
  private appToken: any;
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/grupos';

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }

  createCouncil(councilGroup: CouncilGroup): Observable<any> {

    if (!localStorage.getItem('token')) {
      this.alertService.warn('Usuário precisa estar logado!');
    }

    this.headers = new Headers ({
      'Content-Type': 'application/json',
      'appToken': localStorage.getItem('token')
    });

    this.options = new RequestOptions({ headers: this.headers });
    console.log('Create Council');

    const body = this.getFormattedData(councilGroup);
    console.log(body);

    return this.http
      .post(this.url, body, this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  private getFormattedData(councilGroup: CouncilGroup) {
    councilGroup.descricao = 'CAE-' + councilGroup.municipio + '-' + councilGroup.estado;

    const temp = {
      'codAplicativo': councilGroup.codAplicativo,
      'codGrupoPai': councilGroup.codGrupoPai,
      'codObjeto': councilGroup.codObjeto,
      'codTipoObjeto': councilGroup.codTipoObjeto,
      'descricao': councilGroup.descricao
    };

    return JSON.stringify(temp);
  }
}
