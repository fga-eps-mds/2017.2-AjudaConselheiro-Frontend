import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
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
    const thereIsToken = localStorage.getItem('token');

    if (thereIsToken) {
      this.headers = new Headers ({
        'Content-Type': 'application/json',
        'appToken': localStorage.getItem('token')
      });

      this.request = new RequestOptions({ headers: this.headers });

      const formattedCouncil = this.getFormattedData(councilGroup);

      return this.http.post(this.url, formattedCouncil, this.request)
        .map(response => this.extractLocation(response))
        .catch(this.handleError);

    } else {
      this.alertService.warn('Usuário precisa estar logado para criar um conselho!');
      console.error('Você precisa estar logado para executar essa ação!');

      return new Observable<any>();
    }
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

  extractLocation(res: Response) {
    const location = res.headers.get('location');
    return location || {};
  }

  getAjudaConselheiroCouncilGroups(description: string):  Observable<Array<Object>> {
    const searchParams = {
      'codAplicativo': 462,
      'descricao': description
    };
    const requestParam = new RequestOptions({ params: searchParams });

    return this.http
      .get(this.url, requestParam)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
