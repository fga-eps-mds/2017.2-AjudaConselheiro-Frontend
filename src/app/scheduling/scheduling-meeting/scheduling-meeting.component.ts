import { SchedulingService } from './../../services/scheduling.service';
import { Scheduling } from './../../models/scheduling.model';
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
  schedulingMeeting: Scheduling;


  constructor(
    private schedulingMeetingService: SchedulingService,
    private router: Router){}

  ngOnInit(){
    this.schedulingMeeting = new Scheduling();
  }

  newSchedulingMeeting(): void {
    if(this.formSchedulingMeeting.form.valid){
      this.schedulingMeetingService.newScheduling(this.schedulingMeeting);
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



  // getSchedulingsMeeting(){
  //   this.schedulingMeetingService.getSchedulingsMeeting()
  //   .then(schedulingsMeeting => this.schedulingsMeeting = schedulingsMeeting);
  // }


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
