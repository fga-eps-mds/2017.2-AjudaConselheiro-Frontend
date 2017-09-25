import { SchedulingService } from './../../../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

import { Scheduling} from './../../../models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {


  @ViewChild('formSchedulingVisit') formSchedulingVisit: NgForm;
  schedulingVisits: Scheduling;


  constructor(private schedulingVisitService: SchedulingService,
    private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.schedulingVisits = this.schedulingVisitService.searchSchedulingId(id);
  }
  update(): void{
    if(this.formSchedulingVisit.form.valid){
      this.schedulingVisitService.updateScheduling(this.schedulingVisits);
      this.router.navigate(['/home']);
       }
  }

}
