import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Scheduling } from './scheduling';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent {

  rForm: FormGroup;
  scheduling:any;                     // A property for our submitted form
  local:string = '';
  members:string = '';
  date: number;
  time: number;

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'local' : [null, Validators.required],
      'members' : [null, Validators.required],
      'date' : [null, Validators.required],
      'time' : [null, Validators.required],
      'validate' : ''
    });

  }
  addScheduling(schedunling) {
    this.local = schedunling.local;
    this.members = schedunling.members;
    this.date = schedunling.date;
    this.time = schedunling.time;
  }

  //scheduling: Array<Scheduling> = [];

}





