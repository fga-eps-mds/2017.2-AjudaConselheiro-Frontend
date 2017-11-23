import { Component, OnInit } from '@angular/core';

import { SchedulingService, AlertService } from './../../services/index';
import { Scheduling } from './../../models/scheduling.model';

@Component({
  selector: 'app-scheduling-home',
  templateUrl: './scheduling-home.component.html',
  styleUrls: ['./scheduling-home.component.css']
})
export class SchedulingHomeComponent implements OnInit {

  public schedulingData;
  public schedulingContent;

  constructor(
    private schedulingService: SchedulingService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.UserScheduling();
  }

  UserScheduling() {
    this.schedulingService.getUserScheduling()
      .subscribe(
      (response) => {
      // this.schedulings = res;
      this.SchedulingContent(response);
      },
      (error) => {
        console.log(error);
        switch (error) {
          case 204:
            this.alertService.warn('Nenhum agendamento encontrada!');
            break;
          case 400:
            this.alertService.error('Erro de requisição!');
            break;
          case 500:
            this.alertService.error('Erro no servidor!');
            break;
          default:
            break;
        }
      });
  }

  SchedulingContent(response: any) {
    this.schedulingData = response;
    this.schedulingService.getCodPost(this.schedulingData);
    this.schedulingService.getCodPostContent(this.schedulingData);
  }
}
