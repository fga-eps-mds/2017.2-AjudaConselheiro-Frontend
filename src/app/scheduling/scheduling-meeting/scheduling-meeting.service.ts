import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SchedulingMeeting } from './scheduling-meeting';
import "rxjs";
import { Observable } from "rxjs";


@Injectable()
export class SchedulingMeetingService {

    constructor(private _http: Http){}

    create(schedulingMeeting:SchedulingMeeting){
        return this._http.post("/agendamento/reuniao",schedulingMeeting)
        .map(data => data.json()).toPromise();
    }
    destroy(schedulingMeeting:SchedulingMeeting){
        return this._http.delete("/agendamento/reuniao/"+schedulingMeeting.local)
        .map(data => data.json()).toPromise();
    }
    update(schedulingMeeting:SchedulingMeeting){
        return this._http.put("/agendamento/reuniao/"+schedulingMeeting.local,schedulingMeeting)
        .map(data => data.json()).toPromise();
    }
    getSchedulingsMeeting(){
        return this._http.get("/agendamento/reuniao")
        .map(data => data.json()).toPromise();
    }
    getSchedulingMeeting(schedulingMeeting:SchedulingMeeting){
        return this._http.get("/agendamento/reuniao/"+schedulingMeeting.local)
        .map(data => data.json()).toPromise();
    }
}
