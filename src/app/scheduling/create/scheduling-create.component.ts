import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling/scheduling.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from '../../services/index';
import { School } from './../../models/school.model';
import { SchedulingCreateAbstract } from './../scheduling-create-abstract.component';

@Component({
  selector: 'app-scheduling-create',
  templateUrl: './scheduling-create.component.html',
  styleUrls: ['./scheduling-create.component.css']
})
export class SchedulingCreateComponent extends SchedulingCreateAbstract implements OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;
  postType = 137;
  postText = "Reuniao";

  constructor(
    schedulingService: SchedulingService,
    router: Router,
    alertService: AlertService,
    scheduling: Scheduling,
  ){
    super(
      schedulingService,
      router,
      alertService,
      scheduling
    );
  }

  ngOnInit() {
    this.scheduling = new Scheduling();
  }
}
