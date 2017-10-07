import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-scheduling',
  templateUrl: './create-scheduling.component.html',
  styleUrls: ['./create-scheduling.component.css']
})
export class CreateSchedulingComponent implements OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;
  scheduling: Scheduling;

  constructor(
    private schedulingService: SchedulingService,
    private router: Router) {}

  ngOnInit() {
    this.scheduling = new Scheduling();
  }

  newScheduling(): void {
    if (this.formScheduling.form.valid) {
      this.schedulingService.createScheduling(this.scheduling);
      this.router.navigate(['/agendamento']);
    }
  }
}
