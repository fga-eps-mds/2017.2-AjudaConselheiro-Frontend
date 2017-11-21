import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { ChecklistService } from './../../services/index';
import { ChecklistCafeteria, SectionCommentaryTwo, ConfirmComentary, ChecklistCafeteriaAnswers,
   ChecklistCafeteriaQuestions } from './../../models/index';

@Component({
  selector: 'app-checklist-cafeteria',
  templateUrl: './checklist-cafeteria.component.html',
  styleUrls: ['./checklist-cafeteria.component.css'],
  providers: [ChecklistService]
})

export class ChecklistCafeteriaComponent implements OnInit {
  checklist: ChecklistCafeteria;
  cafeteriaAnswers: Array<SectionCommentaryTwo> = ChecklistCafeteriaAnswers;
  cafeteriaQuestions: Array<String> = ChecklistCafeteriaQuestions;
  @ViewChild('formChecklist') formChecklist: NgForm;

  constructor(
    private checklistThree: ChecklistService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checklist = new ChecklistCafeteria();
  }

  copy(cafeteriaAnswers): void {
    this.checklist.ChecklistCafeteriaAnswers = cafeteriaAnswers;
  }

  newFormulario(): void {
    if (this.formChecklist.form.valid) {
      this.checklistThree.newCheck(this.checklist);
      this.router.navigate(['/checklist']);
    }
  }
}

