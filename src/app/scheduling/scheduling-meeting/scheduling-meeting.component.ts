import { SchedulingMeetingService } from './scheduling-meeting.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchedulingMeeting } from './scheduling-meeting';

@Component({
  selector: 'app-scheduling-meeting',
  templateUrl: './scheduling-meeting.component.html'
})
export class SchedulingMeetingComponent {

  schedulingsMeeting: Array<SchedulingMeeting> = [
    new SchedulingMeeting("GAMA","JOÃO,MARIA",24072017,1400),
    new SchedulingMeeting("SAMAMBAIA","CARLOS,MARIA",23082017,1400)
  ];

  constructor(private schedulingMeetingService: SchedulingMeetingService){}

  ngOnInit(){
    //this.getSchedulingsMeeting();
  }

  create(schedulingMeeting: SchedulingMeeting){
    this.schedulingsMeeting.push(schedulingMeeting);
  }

  getSchedulingsMeeting(){
    this.schedulingMeetingService.getSchedulingsMeeting()
    .then(schedulingsMeeting => this.schedulingsMeeting = schedulingsMeeting)
  }


  // rForm: FormGroup;
  // scheduling:any;                     // A property for our submitted form
  // local:string = '';
  // members:string = '';
  // date: number;
  // time: number;

  // constructor(private fb: FormBuilder) {

  //   this.rForm = fb.group({
  //     'local' : [null, Validators.required],
  //     'members' : [null, Validators.required],
  //     'date' : [null, Validators.required],
  //     'time' : [null, Validators.required],
  //     'validate' : ''
  //   });

  // }
  // addScheduling(scheduling) {
  //   this.local = scheduling.local;
  //   this.members = scheduling.members;
  //   this.date = scheduling.date;
  //   this.time = scheduling.time;
  // }

  //scheduling: Array<Scheduling> = [];

}





