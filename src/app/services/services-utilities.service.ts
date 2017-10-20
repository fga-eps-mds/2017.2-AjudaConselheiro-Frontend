import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class ServicesUtilitiesService {

  constructor() { }

  protected handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(error);
  }

  protected extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
}
