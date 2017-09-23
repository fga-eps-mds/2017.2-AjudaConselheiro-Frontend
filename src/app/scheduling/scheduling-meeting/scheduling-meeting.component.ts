import { Router } from '@angular/router';
import { SchedulingMeeting } from './../../models/scheduling-meeting.model';
import { SchedulingMeetingService } from './../../services/scheduling-meeting.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-scheduling-meeting',
  templateUrl: './scheduling-meeting.component.html'
})
export class SchedulingMeetingComponent implements OnInit {

  @ViewChild('formSchedulingMeeting') formSchedulingMeeting: NgForm;
  schedulingMeeting: SchedulingMeeting;


  constructor(
    private schedulingMeetingService: SchedulingMeetingService,
    private router: Router){}

  ngOnInit(){
    this.schedulingMeeting = new SchedulingMeeting();
  }   

  newSchedulingMeeting(): void {
    if(this.formSchedulingMeeting.form.valid){
      this.schedulingMeetingService.newSchedulingMeeting(this.schedulingMeeting);
      this.router.navigate(["/schedulinghome"]);
    }
  }

  // ngOnInit() {
  //   this.schedulingsMeeting = [
  //     new SchedulingMeeting(1,"Gama","Fulano",0,1400),
  //     new SchedulingMeeting(2,"Guara","Cicrano",0,1500)
  //   ];
  //   this.schedulingsMeeting = this.listAllScheculingMeeting();
  // }

  // listAllScheculingMeeting(): SchedulingMeeting[]{
  //   return this.schedulingMeetingService.listAllScheculingMeeting();
  // }



}
