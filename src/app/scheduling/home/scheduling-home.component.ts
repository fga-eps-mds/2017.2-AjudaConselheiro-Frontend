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
  public schedulings: any[] = [0];

  constructor(
    private schedulingService: SchedulingService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.UserScheduling();
  }

  UserScheduling() {
    this.schedulingService.getUserSchedulingData()
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
    let codPost;
    let codPostContent;
    this.schedulingData = response;

    codPost = this.schedulingService.getCodPost(this.schedulingData);
    codPostContent = this.schedulingService.getCodPostContent(this.schedulingData);

    for (let index = 0; index < codPost.length; index++) {
      this.schedulingService.getSchedulingPostContent(codPost[index], codPostContent[index])
        .subscribe(
        (res) => {
          this.schedulings[index] = res;
          console.log(this.schedulings[index]);
          if (typeof this.schedulings[index].JSON === 'string') {
            this.schedulings[index] = JSON.parse(this.schedulings[index].JSON);
          } else {
            this.schedulings[index] = null;
          }
          // console.log(this.schedulings[index]);
        },
        (error) => {
          console.log(error);
          switch (error) {
            case 404:
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
}
