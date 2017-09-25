import { SchedulingService } from './../../../services';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

import { Scheduling} from './../../../models';


@Component({
  selector: 'app-scheduling-visit',
  templateUrl: './scheduling-visit.component.html'
})
export class SchedulingVisitComponent implements OnInit {

  @ViewChild('formSchedulingVisit') formSchedulingVisit: NgForm;
  schedulingVisits: Scheduling;


  constructor(private schedulingVisitService: SchedulingService,
  private router: Router) { }

  ngOnInit() {
    this.schedulingVisits = new Scheduling();
  }
  newSchedulingVisit(): void{
    if(this.formSchedulingVisit.form.valid){
      this.schedulingVisits.type = 'Visits';
      this.schedulingVisitService.newScheduling(this.schedulingVisits);
      this.router.navigate(["/home"]);
    }
  }

}
