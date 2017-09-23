import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

    constructor(private _http: Http) {}

    create(user: User) {
        return this._http.post('/users/list', user)
        .map(data => data.json()).toPromise();
    }
    destroy(user: User) {
        return this._http.delete('/users/list/' + user.id)
        .map(data => data.json()).toPromise();
    }
    update(user: User) {
        return this._http.put('/users/list/' + user.id, user)
        .map(data => data.json()).toPromise();
    }
    getUsers() {
        return this._http.get('/users/list')
        .map(data => data.json()).toPromise();
    }
    getUser(user: User) {
        return this._http.get('/users/list/' + user.id)
        .map(data => data.json()).toPromise();
    }
}
