import { ChecklistMenu } from '../../models/checklist/checklist.model';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ChecklistMenuQuestionIteratorArray, ChecklistMenuAnswerIteratorArray } from '../../models/checklist/checklistForms';
import { CommentBinaryForm, CommentForm, BinaryForm, ConfirmComentary} from '../../models/index';
import { ChecklistService, PostService, AlertService } from '../../services/index';

@Component({
  selector: 'app-checklistmenu',
  templateUrl:  './checklist-menu.component.html',
  styleUrls: ['./checklist-menu.component.css'],
  providers: [ChecklistService, PostService, AlertService],
})
export class ChecklistMenuComponent implements OnInit {
  checklist: ChecklistMenu;
  iteratorArrayQuestions: Array<String[]> = ChecklistMenuQuestionIteratorArray;
  iteratorArrayAnswers: Array<Object> = ChecklistMenuAnswerIteratorArray;

  constructor(
    private menuService: ChecklistService,
    private router: Router,
    protected postService: PostService,
  ) {}

  ngOnInit(): void {
    console.warn(this.iteratorArrayAnswers);
  }

  onSubmit(): void {
    console.warn(this.iteratorArrayAnswers);
  }
  savePost() {
    const jsonChecklistMenu = JSON.stringify({
      'iteratorArrayAnswers': this.iteratorArrayAnswers,
    });
    this.router.navigate(['/checklist']);

    this.postService.savePost(jsonChecklistMenu).subscribe(
      result => console.log(result)
    );
  }
}
