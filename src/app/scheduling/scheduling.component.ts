import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {

  rForm: FormGroup;
  scheduling:any;                     // A property for our submitted form
  local:string = '';
  members:string = '';
  date: any;
  time: any;

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
  today: number = Date.now();
  ngOnInit() {
  }

}
