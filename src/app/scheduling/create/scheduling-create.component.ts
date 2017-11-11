import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling/scheduling.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from '../../services/index';
import { School } from './../../models/school.model';
import { SchedulingCreateInterface } from './../scheduling-create-interface.component';

@Component({
  selector: 'app-scheduling-create',
  templateUrl: './scheduling-create.component.html',
  styleUrls: ['./scheduling-create.component.css']
})
export class SchedulingCreateComponent implements SchedulingCreateInterface, OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;
  scheduling: Scheduling;
  postType = 137;
  postText = 'Reunião';

  constructor(
    private schedulingService: SchedulingService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.scheduling = new Scheduling();
  }

  newScheduling(): void {
    if (this.formScheduling.form.valid) {
      this.schedulingService.newScheduling(this.scheduling, this.postType, this.postText);
      this.router.navigate(['/agendamento']);
    }
  }

  navigate() {
    this.router.navigate(['/agendamento']);
  }

  result() {
    this.alertService.success('Postagem cadastrada com sucesso.');
    this.navigate();
  }

  error(status: any) {
    if (status === 400) {
      this.alertService.warn('Erro!');
    } else {
      this.alertService.error('Erro: falha na comunicação com o sistema!');
    }
  }

  register(): void {
      this.schedulingService.newScheduling(this.scheduling, this.postType, this.postText)
        .subscribe(
        result => {
          this.result();
        },
        error => {
          this.error(error.status);
        });
  }
}
