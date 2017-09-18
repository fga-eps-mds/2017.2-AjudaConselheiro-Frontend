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

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'local' : [null, Validators.required],
      'members' : [null, Validators.required],
      'validate' : ''
    });

  }
  addScheduling(scheduling) {
    this.local = scheduling.local;
    this.members = scheduling.members;
  }
  //scheduling: Array<Scheduling> = [];

}





