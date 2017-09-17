import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Counselor } from './counselor';
import "rxjs";
import { Observable } from "rxjs";

@Injectable()
export class CounselorService {

  constructor(private _http: Http) { }

  create(counselor: Counselor){
    this._http.post("/counselors", counselor)
    .map(data => data.json).toPromise();
  }

  destroy(counselor: Counselor){
    this._http.delete("/counselors/" + counselor._full_name)
    .map(data => data.json).toPromise();
  }

  update(counselor: Counselor){
    this._http.put("/counselors/" + counselor._full_name, counselor)
    .map(data => data.json).toPromise();
  }

  getCounselors(){
    this._http.get("/counselors")
    .map(data => data.json).toPromise();
  }

  getCounselor(counselor: Counselor){
    this._http.get("/counselors/" + counselor._full_name)
    .map(data => data.json).toPromise();
  }

}
