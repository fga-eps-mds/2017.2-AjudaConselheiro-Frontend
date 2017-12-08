import { Scheduling } from './../models/scheduling.model';
import { SchedulingService } from './../services/scheduling/scheduling.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from '../services/index';
import { School } from './../models/school.model';
import { AlertComponent } from './../layouts/alert/alert.component';

export abstract class SchedulingCreateAbstract {
  @ViewChild('formScheduling') formScheduling: NgForm;
  postType = 0;
  postText = '';

  constructor(
    public schedulingService: SchedulingService,
    public router: Router,
    public alertService: AlertService,
    public scheduling: Scheduling
  ) {}

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
