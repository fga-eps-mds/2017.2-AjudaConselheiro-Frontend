import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchedulingMeeting } from './scheduling-meeting';

@Component({
  selector: 'app-scheduling-meeting',
  templateUrl: './scheduling-meeting.component.html'
})
export class SchedulingMeetingComponent {

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
  addScheduling(scheduling) {
    this.local = scheduling.local;
    this.members = scheduling.members;
    this.date = scheduling.date;
    this.time = scheduling.time;
  }

  //scheduling: Array<Scheduling> = [];

}





