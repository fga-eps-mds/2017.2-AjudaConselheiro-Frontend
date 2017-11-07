import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling/scheduling.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-scheduling-edit',
  templateUrl: './scheduling-edit.component.html',
  styleUrls: ['./scheduling-edit.component.css']
})
export class SchedulingEditComponent implements OnInit {


  @ViewChild('formScheduling') formScheduling: NgForm;
  scheduling: Scheduling;

  constructor(private schedulingService: SchedulingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.scheduling = this.schedulingService.searchSchedulingId(id);
  }
  update(): void {
    if (this.formScheduling.form.valid) {
      this.schedulingService.updateScheduling(this.scheduling);
      this.router.navigate(['/agendamento']);
       }
  }

}
