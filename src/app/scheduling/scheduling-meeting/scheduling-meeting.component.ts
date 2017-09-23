import { SchedulingMeeting } from './../../models/scheduling-meeting.model';
import { SchedulingMeetingService } from './../../services/scheduling-meeting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduling-meeting',
  templateUrl: './scheduling-meeting.component.html'
})
export class SchedulingMeetingComponent implements OnInit {

  schedulingsMeeting: SchedulingMeeting[];

  constructor(private schedulingMeetingService: SchedulingMeetingService){}

  ngOnInit() {
    this.schedulingsMeeting = this.listAllScheculingMeeting();
  }

  listAllScheculingMeeting(): SchedulingMeeting[]{
    return this.schedulingMeetingService.listAllScheculingMeeting();
  }

  getSchedulingsMeeting(){
    this.schedulingMeetingService.getSchedulingsMeeting()
    .then(schedulingsMeeting => this.schedulingsMeeting = schedulingsMeeting);
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

}
