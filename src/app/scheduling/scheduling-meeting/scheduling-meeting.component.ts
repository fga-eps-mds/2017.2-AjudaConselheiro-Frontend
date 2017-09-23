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



}
