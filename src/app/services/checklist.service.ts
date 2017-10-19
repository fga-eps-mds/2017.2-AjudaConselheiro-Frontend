import { Injectable } from '@angular/core';
import { BinaryForm } from '../models/index';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CommentBinaryForm, CommentForm, FormsMenu, FormMenuTwo, ChecklistThree} from '../models/index';
import { SectionCommentary } from '../models/checklist.model';

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
    // checklist 2 services
  getFormsMenu(): Promise<CommentBinaryForm[]> {
    return this.http.get(this.formMenuUrl)
      .toPromise()
      .then(response => response.json().data as CommentBinaryForm[]
    );
  }

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
// checklist 1 services
  //  getCheckOneCommentaries(): Promise<SectionCommentary[]> {
  //     return this.http.get(this.formOneAnswerUrl)
  //     .toPromise()
  //     .then(response => response.json().data as SectionCommentary[]);
  // }
  // getCheckOneFirstTopicAnswers(): Promise<BinaryForm[]> {
  //     return this.http.get(this.formOneAnswerUrl)
  //     .toPromise()
  //     .then(response => response.json().data as BinaryForm[]);
  // }
  // getCheckOneSecondTopicAnswers(): Promise<BinaryForm[]> {
  //     return this.http.get(this.formOneAnswerUrl)
  //     .toPromise()
  //     .then(response => response.json().data as BinaryForm[]);
  // }
  // getCheckOneThirdTopicAnswers(): Promise<BinaryForm[]> {
  //     return this.http.get(this.formOneAnswerUrl)
  //     .toPromise()
  //     .then(response => response.json().data as BinaryForm[]);
  // }
  // getCheckOneFourthTopicAnswers(): Promise<BinaryForm[]> {
  //     return this.http.get(this.formOneAnswerUrl)
  //     .toPromise()
  //     .then(response => response.json().data as BinaryForm[]);
  // }
  // getCheckOneFifthTopicAnswers(): Promise<BinaryForm[]> {
  //     return this.http.get(this.formOneAnswerUrl)
  //     .toPromise()
  //     .then(response => response.json().data as BinaryForm[]);
  // }
  // getCheckOneSixthTopicAnswers(): Promise<BinaryForm[]> {
  //     return this.http.get(this.formOneAnswerUrl)
  //     .toPromise()
  //     .then(response => response.json().data as BinaryForm[]);
  // }
  // getCheckOneSeventhTopicAnswers(): Promise<CommentBinaryForm[]> {
  //     return this.http.get(this.formOneAnswerUrl)
  //     .toPromise()
  //     .then(response => response.json().data as CommentBinaryForm[]);
  // }
  // getCheckOneEighthTopicAnswers(): Promise<BinaryForm[]> {
  //     return this.http.get(this.formOneAnswerUrl)
  //     .toPromise()
  //     .then(response => response.json().data as BinaryForm[]);
  // }
}

