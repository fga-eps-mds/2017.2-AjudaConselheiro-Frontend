import { SectionCommentaryTwo, SectionCommentary } from './../models/checklist/checklist.model';
import { Injectable } from '@angular/core';
import { BinaryForm } from '../models/index';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CommentBinaryForm, CommentForm, FormsMenu, FormMenuTwo, ChecklistThree} from '../models/index';

@Injectable()
export class ChecklistService {

    constructor(private http: Http) {}
    private formMenuUrl = 'app/formsMenu';
    private formMenuThree = 'app/formsThree';
    private formMenuAnswerUrl = 'app/formCheckAnswer';
    private formOneAnswerUrl = 'app/checklist';

    // checklist three services
    listAllCheck(): ChecklistThree[] {
        const checklistThree = localStorage['checklistThree'];
        return checklistThree ? JSON.parse(checklistThree) : [];
    }

    newCheck(checkThree: ChecklistThree): void {
        const checklistThree = this.listAllCheck();
        checkThree.id = new Date().getTime();
        checklistThree.push(checkThree);
        localStorage['checklistThree'] = JSON.stringify(checklistThree);
    }

    // checklist 2 services
    getFormsMenu(): Promise<CommentBinaryForm[]> {
        return this.http.get(this.formMenuUrl)
            .toPromise()
            .then(response => response.json().data as CommentBinaryForm[]
        );
    }

    getFormsThree(): Promise<SectionCommentaryTwo[]> {
      return this.http.get(this.formMenuThree)
          .toPromise()
          .then(response => response.json().data as SectionCommentaryTwo[]
      );
    }
}

