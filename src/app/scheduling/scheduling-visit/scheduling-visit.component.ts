import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

import { SchedulingVisitService } from './../../services';
import { SchedulingVisit } from './../../models/scheduling-visit.model';



@Component({
  selector: 'app-scheduling-visit',
  templateUrl: './scheduling-visit.component.html'
})
export class SchedulingVisitComponent implements OnInit {

  @ViewChild('formSchedulingVisit') formSchedulingVisit: NgForm;
  schedulingVisits: SchedulingVisit;

  constructor(private schedulingVisitService: SchedulingVisitService,
  private router: Router) { }

  ngOnInit() {
    this.schedulingVisits = new SchedulingVisit();
  }
  newSchedulingVisit(): void{
    if(this.formSchedulingVisit.form.valid){
      this.schedulingVisitService.newSchedulingVisit(this.schedulingVisits);
      this.router.navigate(["/home"]);
    }
  }

}
