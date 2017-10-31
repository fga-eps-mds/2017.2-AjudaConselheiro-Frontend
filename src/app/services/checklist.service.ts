import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {
  CommentBinaryForm,
  CommentForm,
  FormsMenu,
  FormMenuTwo,
  ChecklistThree,
  BinaryForm,
  SectionCommentary,
  SectionCommentaryTwo
} from '../models/index';

import { ServicesUtilitiesService } from './services-utilities.service';
import { AlertService } from './alert/alert.service';

@Injectable()
export class ChecklistService extends ServicesUtilitiesService {

  private formMenuUrl = 'app/formsMenu';
  private formMenuThree = 'app/formsThree';
  private formMenuAnswerUrl = 'app/formCheckAnswer';
  private formOneAnswerUrl = 'app/checklist';

  constructor(private http: Http, private alertService: AlertService) {
    super();
  }

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
    return this.http
      .get(this.formMenuUrl)
      .toPromise()
      .then(response => response.json().data as CommentBinaryForm[]);
  }

  getFormsThree(): Promise<SectionCommentaryTwo[]> {
    return this.http
      .get(this.formMenuThree)
      .toPromise()
      .then(response => response.json().data as SectionCommentaryTwo[]);
  }
}
