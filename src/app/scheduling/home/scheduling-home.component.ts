import { Component, OnInit } from '@angular/core';

import { SchedulingService, AlertService } from './../../services/index';
import { Scheduling } from './../../models/scheduling.model';

@Component({
  selector: 'app-scheduling-home',
  templateUrl: './scheduling-home.component.html',
  styleUrls: ['./scheduling-home.component.css']
})
export class SchedulingHomeComponent implements OnInit {

  schedulings: Scheduling[];

  constructor(
    private schedulingService: SchedulingService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getUserScheduling();
  }

  getUserScheduling() {
    this.schedulingService.getScheduling()
      .subscribe(
      (res) => {
        this.schedulings = res;
        console.log(this.schedulings);
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


}
