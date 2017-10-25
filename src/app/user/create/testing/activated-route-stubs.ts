import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { convertToParamMap, ParamMap } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.paramMap is Observable
  private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
  paramMap = this.subject.asObservable();

  // Test parameters
  private _testParamMap: ParamMap;
  get testParamMap() { return this._testParamMap; }
  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subject.next(this._testParamMap);
  }

  // ActivatedRoute.snapshot.paramMap
  get snapshot() {
    return { paramMap: this.testParamMap };
  }
}
