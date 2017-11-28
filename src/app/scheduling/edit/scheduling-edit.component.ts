import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService, AlertService } from './../../services/index';
import { Scheduler } from 'rxjs/Scheduler';

@Component({
  moduleId: module.id,
  selector: 'app-scheduling-edit',
  templateUrl: './scheduling-edit.component.html',
  styleUrls: ['./scheduling-edit.component.css']
})
export class SchedulingEditComponent implements OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;

  postText = 'Agendamento';

  constructor(
    private schedulingService: SchedulingService,
    private alertService: AlertService,
    public scheduling: Scheduling,
    private router: Router) { }

  ngOnInit() {
    this.scheduling = this.getScheduling();
  }

  result() {
    this.alertService.success('Postagem atualizada com sucesso.');
    this.router.navigate(['agendamento']);
  }

  error(status: any) {
    if (status === 400) {
      this.alertService.warn('Erro!');
    } else {
      this.alertService.error('Erro: falha na comunicação com o sistema!');
    }
  }

  updateScheduling(): void {
    this.schedulingService.updateScheduling(this.scheduling, this.postText)
    .subscribe(
      result => this.result(),
      error => this.error(error.status));
  }

  getScheduling(): Scheduling {
    this.schedulingService.getScheduling()
    .subscribe(
      result => { this.resultGetScheduling(result);
      },
      error => {
        this.error(error.status);
      });

    return this.scheduling;
  }

  resultGetScheduling(result: any) {

    const actualSched = JSON.parse(JSON.stringify(result));

    this.scheduling.members = actualSched.members;
    this.scheduling.date = actualSched.date;
    this.scheduling.local = actualSched.local;
    this.scheduling.time = actualSched.time;
    this.scheduling.type = actualSched.type;
  }

}
