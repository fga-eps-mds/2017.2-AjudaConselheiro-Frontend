import { Component, OnInit } from '@angular/core';

import { ChecklistMenuQuestionIteratorArray, ChecklistMenuAnswerIteratorArray } from '../../models/checklist/checklistForms';
import { CommentBinaryForm, CommentForm, BinaryForm, ConfirmComentary} from '../../models/index';
import { ChecklistService } from '../../services/index';

@Component({
  selector: 'app-checklistmenu',
  templateUrl:  './checklist-menu.component.html',
  styleUrls: ['./checklist-menu.component.css'],
  providers: [ChecklistService],
})
export class ChecklistMenuComponent implements OnInit {

  iteratorArrayQuestions: Array<String[]> = ChecklistMenuQuestionIteratorArray;
  iteratorArrayAnswers: Array<Object> = ChecklistMenuAnswerIteratorArray;

  constructor(private menuService: ChecklistService) {}

  ngOnInit(): void {
    console.warn(this.iteratorArrayAnswers);
  }

  onSubmit(): void {
    console.warn(this.iteratorArrayAnswers);
  }
  // newFormulario(): void {
  //   if (this.f.form.valid) {
  //     this.checklistThree.newCheck(this.checklist);
  //     this.router.navigate(['/checklist']);
  //   }
  // }
}
