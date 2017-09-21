import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { User } from '../user/user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  create(user: User) {
    this.http.post('conselheiros/', user)
    .map(data => data.json).toPromise();
  }

  destroy(user: User) {
    this.http.delete('conselheiros/' + user.full_name)
    .map(data => data.json).toPromise();
  }

  update(user: User) {
    this.http.put('conselheiros/' + user.full_name, user)
    .map(data => data.json).toPromise();
  }

  getUsers(): Promise<Array<User>> {
    return this.http
    .get('conselheiros/')
    .toPromise()
    .then((response) => {
      return response.json().data as User[];
    })
    .catch(this.handleError);
  }

  getUser(full_name: string) {
    return this.getUsers()
    .then(users => users.find(user => user.full_name === full_name));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
