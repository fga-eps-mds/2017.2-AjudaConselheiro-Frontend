import { SectionCommentary } from '../models/checklist.model';
import { Injectable } from '@angular/core';
import { CommentBinaryForm, CommentForm, FormsMenu, FormMenuTwo, ChecklistThree} from '../models/index';
import { BinaryForm } from '../models/index';
import { Http } from '@angular/http';

@Injectable()
export class ChecklistService {

    constructor(private http: Http) {}
    private formMenuUrl = 'app/formsMenu';
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

}

