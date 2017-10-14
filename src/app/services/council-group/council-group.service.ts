import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CouncilGroup } from '../../models/index';

@Injectable()
export class CouncilGroupService {
  private headers: Headers;
  private options: RequestOptions;
  private appToken: any;

  constructor(private http: Http) { }
  createCouncil(councilGroup: CouncilGroup): Observable<any> {

    this.appToken = localStorage.getItem('appToken');
    this.appToken = 'v1_7AB9213CC00EA86EC37EB78527CC947CFE1CEA008FA92FE84AB54F7050EF06A6FAC9C48C789AA' +
    '08BEB0D4764DC85E58078C163ECB39E980824C6B06E5607C8D2E17100D09D37FD4F52BA037E3D1C13602E846BDF8AE9DE7D7CEC717290CAF59328EFD4ED9' +
    '1D871426B74A3DEBEAE9ED24400F66D4522F6C299F36872837DDF3CCEDA09C943079C8E630DA7FA166C0EF2E63292D67A' +
    '090F8CFB31437FEC37AE6491810C081703F7B3ADF5D9078B51DD241DB26255A2DD3EFC0E0DBBC092711755080E72F14BC0' +
    'B617F8A6418D9700E5D4D417D785A7011858A28222C16DE79906C18EA047ABBB1B1DA7218738E962D0AC357E5BA635D5D477D42020402DEE900E';
    /*appToken setado temporariamente*/

    this.headers = new Headers ({
      'Content-Type': 'application/json',
      'appToken': this.appToken
    });

    this.options = new RequestOptions({ headers: this.headers });
    console.log('Create Council');

    const body = {
      'codAplicativo': 462,
      'codGrupoPai': 1,
      'codObjeto': 1,
      'codTipoObjeto': 1,
      'descricao': 'Slinger'
    } ;

    return this.http
      .post('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/grupos', body, this.options)
      .map(res => this.extractData(res))
      .catch(this.handleError);
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
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
