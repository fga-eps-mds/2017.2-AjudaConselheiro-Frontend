import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { CouncilGroup } from '../../models/index';
import { AlertService } from '../../services/alert/alert.service';

@Injectable()
export class CouncilGroupService {
  private headers: Headers;
  private options: RequestOptions;
  private appToken: any;
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/grupos';
  body: any;

  constructor(private http: Http, private alertService: AlertService) { }

  createCouncil(councilGroup: CouncilGroup): Observable<any> {

    this.headers = new Headers ({
      'Content-Type': 'application/json',
      'appToken': this.appToken
    });

    this.options = new RequestOptions({ headers: this.headers });
    console.log('Create Council');

    this.body = this.getFormattedData(councilGroup);
    console.log(this.body);

    return this.http
      .post(this.url, this.body, this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  getFormattedData(councilGroup: CouncilGroup) {
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
