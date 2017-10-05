import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getUsers() {
        return this.http.get('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas',
        this.jwt()).map((response: Response) => response.json());
    }

    getUser(id: number) {
        return this.http.get('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas' + id,
         this.jwt()).map((response: Response) => response.json());
    }

    createUser(user: User) {
        return this.http.post('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas',
        user, this.jwt()).map((response: Response) => response.json());
    }

    updateUser(user: User) {
        return this.http.put('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas' + user.id,
         user, this.jwt()).map((response: Response) => response.json());
    }

    deleteUser(id: number) {
        return this.http.delete('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas' + id,
        this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
      }
    }
}
