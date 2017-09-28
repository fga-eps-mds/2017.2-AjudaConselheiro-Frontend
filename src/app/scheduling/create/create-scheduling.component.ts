import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-scheduling',
  templateUrl: './create-scheduling.component.html',
  styleUrls: ['./create-scheduling.component.css']
})
export class CreateSchedulingComponent implements OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;
  scheduling: Scheduling;

  maskdate: any[] = [/[0-3]/,/[0-9]/ ,'/',/[0-1]/,/[1-9]/,'/',/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/];

  constructor(
    private schedulingService: SchedulingService,
    private router: Router){}

  ngOnInit(){
    this.scheduling = new Scheduling();
  }   

  newScheduling(): void {
    if(this.formScheduling.form.valid){
      this.schedulingService.newScheduling(this.scheduling);
      this.router.navigate(["/agendamento"]);
    }
  }
}