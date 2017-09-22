import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs";
import { Observable } from "rxjs";


@Injectable()
export class SchedulingMeetingService {

    constructor(private _http: Http){}

}
