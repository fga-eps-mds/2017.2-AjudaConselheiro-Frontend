import { SchedulingMeeting } from './../models/scheduling-meeting.model';
import { Injectable } from '@angular/core';


@Injectable()
export class SchedulingMeetingService {

  constructor() { }

  listAllScheculingMeeting():SchedulingMeeting[]{
    const schedulingsMeeting = localStorage['schedulingsMeeting'];
    return schedulingsMeeting ? JSON.parse(schedulingsMeeting):[];
  } 

  newSchedulingMeeting(schedulingMeeting:SchedulingMeeting): void {
    const schedulingsMeeting = this.listAllScheculingMeeting();
    schedulingMeeting.id = new Date().getTime();
    schedulingsMeeting.push(schedulingMeeting);
    localStorage['schedulingsMeeting'] = JSON.stringify(schedulingsMeeting);
  }

}
