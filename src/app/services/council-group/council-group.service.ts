import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CouncilGroup } from '../../models/index';
import { AlertService } from '../../services/alert/alert.service';
import { ServicesUtilitiesService } from '../../services/services-utilities.service';

@Injectable()
export class CouncilGroupService extends ServicesUtilitiesService {
  private headers: Headers = null;
  private request: RequestOptions = null;
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/grupos';

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }

  createCouncil(councilGroup: CouncilGroup): Observable<any> {

    if (!localStorage.getItem('token')) {
      this.alertService.warn('Usuário precisa estar logado para criar um conselho!');
    }

    this.headers = new Headers ({
      'Content-Type': 'application/json',
      'appToken': localStorage.getItem('token')
    });

    this.request = new RequestOptions({ headers: this.headers });
    console.log('Create Council');

    const formattedCouncil = this.getFormattedData(councilGroup);
    console.log(formattedCouncil);

    return this.http.post(this.url, formattedCouncil, this.request)
      .map(response => this.extractData(response))
      .catch(this.handleError);
  }

  getFormattedData(councilGroup: CouncilGroup) {
    councilGroup.descricao = 'CAE-' + councilGroup.municipio + '-' + councilGroup.estado;

    const council = {
      'codAplicativo': councilGroup.codAplicativo,
      'codGrupoPai': councilGroup.codGrupoPai,
      'codObjeto': councilGroup.codObjeto,
      'codTipoObjeto': councilGroup.codTipoObjeto,
      'descricao': councilGroup.descricao
    };

    return JSON.stringify(council);
  }

  extractData(res: Response) {
    const body = res.json();
    const location = res.headers.get('location');
    console.log(body);
    console.log(location);
    return location || {};
  }

  handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.log(error.status);

    return Observable.throw(error);
  }

  getAjudaConselheiroCouncilGroups(description: string):  Observable<Array<Object>> {
    return this.http
    .get(this.url + '?codAplicativo=462')
    .map(res => res.json().find(x => x.descricao === description))
    .catch(this.handleError);
  }
}
