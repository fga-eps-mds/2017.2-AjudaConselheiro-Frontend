import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolService } from '../../services/index';

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
    private router: Router,
    private schoolService: SchoolService,
  ) {}

  ngOnInit() {
    this.scheduling = new Scheduling();
  }

  searchSchool(): void {
    this.schoolService.searchSchool()
      .subscribe(
          result => {
            console.log(result);
          },
          error => {
            console.error(error);
      });
  }

  newScheduling(): void {
    if (this.formScheduling.form.valid) {
      this.schedulingService.newScheduling(this.scheduling);
      this.router.navigate(['/agendamento']);
    }
  }
}
