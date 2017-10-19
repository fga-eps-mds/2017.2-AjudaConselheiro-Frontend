import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicesUtilitiesService {

  constructor() { }

  public handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(error);
  }

  public extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
}
