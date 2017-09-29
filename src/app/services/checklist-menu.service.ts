import { Injectable } from '@angular/core';
import { FormCheck, FormCheckAnswer, FormsMenu, FormMenuTwo} from '../models/index';

@Injectable()
export class ChecklistMenuService{

    getFormsMenu(): Promise<FormCheckAnswer[]>{
        return Promise.resolve(FormsMenu);
    }

    getFormsMenuTwo(): Promise<FormCheck[]>{
        return Promise.resolve(FormMenuTwo);
    } 

}