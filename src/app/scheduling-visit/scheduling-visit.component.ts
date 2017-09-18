import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchedulingVisit } from './scheduling-visit';

@Component({
  selector: 'app-scheduling-visit',
  templateUrl: './scheduling-visit.component.html',
  styleUrls: ['./scheduling-visit.component.css']
})
export class SchedulingVisitComponent {
  local: any;
  Scheduling: SchedulingVisit;

}
