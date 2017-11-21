import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { ChecklistService, PostService, AlertService } from './../../services/index';
import { ChecklistCafeteria, SectionCommentaryTwo, ConfirmComentary, ChecklistCafeteriaAnswers,
   ChecklistCafeteriaQuestions } from './../../models/index';

@Component({
  selector: 'app-checklist-cafeteria',
  templateUrl: './checklist-cafeteria.component.html',
  styleUrls: ['./checklist-cafeteria.component.css'],
  providers: [ChecklistService, PostService, AlertService]
})

export class ChecklistCafeteriaComponent implements OnInit {
  checklist: ChecklistCafeteria;
  cafeteriaAnswers: Array<SectionCommentaryTwo> = ChecklistCafeteriaAnswers;
  cafeteriaQuestions: Array<String> = ChecklistCafeteriaQuestions;

  constructor(
    private checklistThree: ChecklistService,
    private router: Router,
    protected postService: PostService,
  ) { }

  ngOnInit() {
    this.checklist = new ChecklistCafeteria();
  }

  savePost() {
    const jsonChecklistCafeteria = JSON.stringify({
      'cafeteriaAnswers': this.cafeteriaAnswers,
    });
    this.router.navigate(['/checklist']);

    this.postService.savePost(jsonChecklistCafeteria).subscribe(
      result => console.log(result)
    );
  }
}

