import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/user';

@Injectable()
export class UserService {

  // URL for fake API localhost using JSON Server
  private url = 'http://localhost:3000/users';

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get(this.url)
    .map(res => res.json());
  }

  // Http POST
  createUser(user: User) {
    user.id = new Date().getTime();
    return this.http.post(this.url, JSON.stringify(user))
    .map(res => res.json());
  }

  // Http GET
  searchUsingID(id: number) {
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  // Http PUT
  updateUser(user: User) {
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
    .map(res => res.json());
  }

  // Http DELETE
  deleteUser(id: number) {
    return this.http.delete(this.getUserUrl(id))
    .map(res => res.json());
  }

  // setPresident(id: number): void {
  //   const users: User[] = this.getUsers();
  //   users.forEach((obj, index, objs) => {
  //     if (id === obj.id) {
  //       objs[index].isPresident = !obj.isPresident;
  //     }
  //   });
  //   localStorage['users'] = JSON.stringify(users);
  // }

  private getUserUrl(id) {
    return this.url + '/' + id;
  }
}
