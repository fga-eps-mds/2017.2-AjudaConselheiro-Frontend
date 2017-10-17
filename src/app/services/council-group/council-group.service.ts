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

  constructor(private http: Http, private alertService: AlertService) { }

  createCouncil(councilGroup: CouncilGroup): Observable<any> {

    this.headers = new Headers ({
      'Content-Type': 'application/json',
      'appToken': this.appToken
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

  private extractData(res: Response) {
    const body = res.json();
    const location = res.headers.get('location');
    console.log(body);
    console.log(location);
    return location || {};
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.log(error.status);

    return Observable.throw(error);
  }

  getStates():  Observable<Array<Object>> {
    return this.http
    .get('http://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .map(res => this.extractData(res))
    .catch(this.handleError);
  }
}
