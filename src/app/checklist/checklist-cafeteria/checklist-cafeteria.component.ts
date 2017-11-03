import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { ChecklistService } from './../../services/index';
import { ChecklistCafeteria, SectionCommentaryTwo, ConfirmComentary, FormMenuThree } from './../../models/index';

@Component({
  selector: 'app-checklist-cafeteria',
  templateUrl: './checklist-cafeteria.component.html',
  styleUrls: ['./checklist-cafeteria.component.css'],
  providers: [ChecklistService]
})

export class ChecklistCafeteriaComponent implements OnInit {
  checklist: ChecklistCafeteria;
  formMenuThree: Array<SectionCommentaryTwo> = FormMenuThree;
  @ViewChild('formChecklist') formChecklist: NgForm;

  constructor(
    private checklistThree: ChecklistService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checklist = new ChecklistCafeteria();
  }

  copy(formMenuThree): void {
    this.checklist.FormMenuThree = formMenuThree;
  }

  newFormulario(): void {
    if (this.formChecklist.form.valid) {
      this.checklistThree.newCheck(this.checklist);
      this.router.navigate(['/checklist']);
    }
  }
}

