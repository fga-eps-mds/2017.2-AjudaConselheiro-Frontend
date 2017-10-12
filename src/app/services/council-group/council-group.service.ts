import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { CouncilGroup } from '../../models/index';

@Injectable()
export class CouncilGroupService {
  private url: 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/grupos';

  constructor(private http: Http) { }

  createCouncil(councilGroup: CouncilGroup): Observable<CouncilGroup> {
    console.log('Create Council');
    const body = JSON.stringify(councilGroup);

    return this.http
      .post(this.url, body)
      .map(res => this.extractData(res))
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    console.log(body);
    return body || {};
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
