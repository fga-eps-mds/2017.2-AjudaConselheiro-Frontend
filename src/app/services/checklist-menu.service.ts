import { Injectable } from '@angular/core';
import { CommentBinaryForm, CommentForm, FormsMenu, FormMenuTwo} from '../models/index';
import { BinaryForm } from '../models/index';
import {Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ChecklistMenuService {

    constructor(private http: Http) {}
    private formMenuUrl = 'app/formsMenu';
    private formMenuAnswerUrl = 'app/formCheckAnswer';

    getFormsMenu(): Promise<CommentBinaryForm[]> {
        return this.http.get(this.formMenuUrl)
            .toPromise()
            .then(response => response.json().data as CommentBinaryForm[]
        );
    }

    // getFormsMenu(): Promise<FormCheckAnswer[]>{
    //     return Promise.resolve(FormsMenu);
    // }

    getFormsMenuTwo(): Promise<CommentForm[]> {
        return this.http.get(this.formMenuAnswerUrl)
        .toPromise()
        .then(response => response.json().data as CommentForm[]);
    }
     getBinaryFormCardapio(): Promise<BinaryForm[]> {
         return this.http.get(this.formMenuAnswerUrl)
         .toPromise()
         .then(response => response.json().data as BinaryForm[]);
     }

}
export class ChecklistOneService {}
