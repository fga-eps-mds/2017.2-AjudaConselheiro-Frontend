import { SchedulingService } from './../../services/scheduling/scheduling.service';
import { Scheduling } from './../../models/scheduling.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scheduling-home',
  templateUrl: './scheduling-home.component.html',
  styleUrls: ['./scheduling-home.component.css']
})
export class SchedulingHomeComponent implements OnInit {

  schedulings: Scheduling[];

  constructor(private schedulingService: SchedulingService) { }

  ngOnInit() {

  }

}
