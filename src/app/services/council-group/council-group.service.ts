import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { CouncilGroup } from '../../models/index';
import { AlertService } from '../../services/alert/alert.service';
import { ServicesUtilitiesService } from '../../services/services-utilities/services-utilities.service';

@Injectable()
export class CouncilGroupService extends ServicesUtilitiesService {
  private headers: Headers = null;
  private request: RequestOptions = null;
  private url = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/grupos';

  constructor(
    private http: Http,
    private alertService: AlertService) {
    super();
  }

createCouncil(councilGroup: CouncilGroup): Observable<any> {
  const thereIsToken = localStorage.getItem('token');

  if (thereIsToken) {
    this.headers = new Headers ({
      'Content-Type': 'application/json',
      'appToken': thereIsToken
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

  deleteCouncil(cod: number) {
    const thereIsToken = localStorage.getItem('token');
    const deleteUrl = 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/grupos/';

    if (thereIsToken) {
      this.headers = new Headers ({
        'Content-Type': 'application/json',
        'appToken': thereIsToken
      });

      this.request = new RequestOptions({ headers: this.headers });

      return this.http.delete(this.url + 'cod', this.request)
      .map(response => this.extractLocation(response))
      .catch(this.handleError);
    }
  }

  getFormattedData(councilGroup: CouncilGroup) {
    console.log('Estado: ', councilGroup.estado, '\n\nMunicipio: ', councilGroup.municipio);

    councilGroup.descricao = 'CAE-' + councilGroup.estado + '-' + councilGroup.municipio;
    console.log('Estado Formatado: ', councilGroup.estado);

    const council = {
      'codAplicativo': councilGroup.codAplicativo,
      'codGrupoPai': councilGroup.codGrupoPai,
      'codObjeto': councilGroup.codObjeto,
      'codTipoObjeto': councilGroup.codTipoObjeto,
      'descricao': councilGroup.descricao
    };
    console.log(council);

    return JSON.stringify(council);
  }

  extractLocation(res: Response) {
    const location = res.headers.get('location');
    return location || {};
  }

  getCouncilGroups():  Observable<any> {
    this.headers = new Headers ({
      'Content-Type': 'application/json'
    });
    this.request = new RequestOptions({ headers: this.headers });

    return this.http.get(this.url + '?codAplicativo=462', this.request)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getMembersCouncilGroup(codGrupo: number): any {
    this.headers = new Headers ({
      'Content-Type': 'application/json'
    });
    this.request = new RequestOptions({ headers: this.headers });

    return this.http.get(this.url + '/' + codGrupo + '/membros', this.request)
    .map(this.extractData)
    .catch(this.handleError);
  }
}
