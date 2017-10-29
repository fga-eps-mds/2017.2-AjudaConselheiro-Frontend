import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { ChecklistService } from './../../services/index';
import { ChecklistThree, SectionCommentaryTwo, ConfirmComentary, FormMenuThree } from './../../models/index';

@Component({
  selector: 'app-checklistthree',
  templateUrl: './checklistthree.component.html',
  styleUrls: ['./checklistthree.component.css'],
  providers: [ChecklistService]
})

export class ChecklistthreeComponent implements OnInit {
  checklist: ChecklistThree;
  formMenuThree: Array<SectionCommentaryTwo> = FormMenuThree;
  @ViewChild('formChecklist') formChecklist: NgForm;

  constructor(
    private checklistThree: ChecklistService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checklist = new ChecklistThree();
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

