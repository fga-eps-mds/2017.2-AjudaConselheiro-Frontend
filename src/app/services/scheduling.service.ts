// import { Scheduling } from './../models/scheduling.model';
// import { Injectable } from '@angular/core';
// import {Http, Headers, RequestOptions, Response} from '@angular/http';
//
// @Injectable()
// export class SchedulingService {
//
//   constructor(private http: Http) { }
//
// listAllScheculings() {
//     return this.http.get('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens',
//     this.jwt()).map((response: Response) => response.json());
//   }
//
//   }
//   newScheduling(scheduling: Scheduling): void {
//     const schedulings = this.listAllScheculings();
//     scheduling.id = new Date().getTime();
//     schedulings.push(scheduling);
//     localStorage['schedulings'] = JSON.stringify(schedulings);
//   }
//
//   updateScheduling(scheduling: Scheduling): void {
//     const schedulings: Scheduling[] = this.listAllScheculings();
//     schedulings.forEach((obj, index, objs) => {
//       if (scheduling.id === obj.id) {
//         objs[index] = scheduling;
//       }
//     });
//     localStorage['schedulings'] = JSON.stringify(schedulings);
//   }
//
//   searchSchedulingId(id: number): Scheduling {
//     const schedulings: Scheduling[] = this.listAllScheculings();
//     return schedulings.find(scheduling => scheduling.id === id);
// }
//
//   deleteScheduling(id: number): void {
//     let schedulings: Scheduling[] = this.listAllScheculings();
//     schedulings = schedulings.filter(scheduling => scheduling.id !== id);
//     localStorage['schedulings'] = JSON.stringify(schedulings);
//   }
//
//   private jwt() {
//         // create authorization header with jwt token
//         const currentScheduling = JSON.parse(localStorage.getItem('currentScheduling'));
//         if (currentScheduling && currentScheduling.token) {
//             const headers = new Headers({ 'Authorization': 'Bearer ' + currentScheduling.token });
//             return new RequestOptions({ headers: headers });
//       }
//     }
// }


import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Scheduling } from './../models/scheduling.model';
import { Injectable } from '@angular/core';
@Injectable()
export class SchedulingService {
    constructor(private http: Http) { }

    getSchedulings() {
        return this.http.get('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens',
        this.jwt()).map((response: Response) => response.json());
    }

    getScheduling(id: number) {
        return this.http.get('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens' + id,
         this.jwt()).map((response: Response) => response.json());
    }

    createScheduling(user: Scheduling) {
        return this.http.post('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens',
        user, this.jwt()).map((response: Response) => response.json());
    }

    updateScheduling(user: Scheduling) {
        return this.http.put('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens' + user.id,
         user, this.jwt()).map((response: Response) => response.json());
    }

    deleteScheduling(id: number) {
        return this.http.delete('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/postagens' + id,
        this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        const currentScheduling = JSON.parse(localStorage.getItem('currentScheduling'));
        if (currentScheduling && currentScheduling.token) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentScheduling.token });
            return new RequestOptions({ headers: headers });
      }
    }
}
