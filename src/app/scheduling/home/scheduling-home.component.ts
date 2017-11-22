import { NgForm } from '@angular/forms';
import { AlertService } from './../../services/alert/alert.service';
import { SchedulingService } from './../../services/scheduling/scheduling.service';
import { Scheduling, SchedulingDelete } from './../../models/scheduling.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scheduling-home',
  templateUrl: './scheduling-home.component.html',
  styleUrls: ['./scheduling-home.component.css'],
  providers: [SchedulingService, AlertService],
})
export class SchedulingHomeComponent implements OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;
  schedulings: Scheduling[];
  codPost = 7188;
  codContent = 5581;

  constructor(
    private schedulingService: SchedulingService,
    private alertService: AlertService
  ) {}
  ngOnInit() {
    this.schedulingService.delete(this.codPost, this.codContent);
    console.log(this.schedulingService.delete(this.codPost, this.codContent));
  }

}
