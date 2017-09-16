import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Counselor } from './counselor';
import "rxjs";
import { Observable } from "rxjs";

@Injectable()
export class CounselorService {

  // constructor(private _http: Http) { }

  // create(user: Counselor){
  //   this._http.post("/users", user)
  //   .map(data => data.json).toPromise();
  // }

  // destroy(user: Counselor){
  //   this._http.delete("/users/"+user._full_name)
  //   .map(data => data.json).toPromise();
  // }

  // update(user: Counselor){
  //   this._http.put("/users/"+user._full_name, user)
  //   .map(data => data.json).toPromise();
  // }

  // getUsers(){
  //   this._http.get("/users")
  //   .map(data => data.json).toPromise();
  // }

  // getUser(user: Counselor){
  //   this._http.get("/users/"+user._full_name)
  //   .map(data => data.json).toPromise();
  // }


}
