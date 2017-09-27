import { Injectable } from '@angular/core';
import { FormCheck, FormCheckAnswer, FormsMenu, FormMenuTwo} from '../models/index';
import {Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ChecklistMenuService{

    constructor(private http: Http){}
    private formUrl = 'app/formsMenu';    

    getFormsMenu(): Promise<FormCheckAnswer[]>{
        console.log("Entrou");
        return this.http.get(this.formUrl, 'formsMenu')
            .toPromise()
            .then(response => response.json().data as FormCheckAnswer[]);
        // return Promise.resolve(CONTATOS);
    }

    // getFormsMenu(): Promise<FormCheckAnswer[]>{
    //     return Promise.resolve(FormsMenu);
    // }

    getFormsMenuTwo(): Promise<FormCheck[]>{
        return Promise.resolve(FormMenuTwo);
    } 

}