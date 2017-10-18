import { FormMenuThree } from './../../models/index';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


import { ChecklistService } from './../../services/checklist.service';
import { ChecklistThree, SectionCommentaryTwo, ConfirmComentary } from './../../models/checklist.model';

@Component({
  selector: 'app-checklistthree',
  templateUrl: './checklistthree.component.html',
  styleUrls: ['./checklistthree.component.css'],
  providers: [ChecklistService]
})
export class ChecklistthreeComponent implements OnInit {
  checklist: ChecklistThree;
  FormMenuThree: Array<SectionCommentaryTwo> = FormMenuThree;
  @ViewChild('formChecklist') formChecklist: NgForm;

  constructor(
    private checklistThree: ChecklistService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checklist = new ChecklistThree();
  }
  newFormulario(): void {
    if (this.formChecklist.form.valid) {
      this.checklistThree.newCheck(this.checklist);
      this.router.navigate(['/checklist']);
    }
  }
}

