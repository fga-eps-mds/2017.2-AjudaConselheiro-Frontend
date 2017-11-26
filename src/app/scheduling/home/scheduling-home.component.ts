import { NgForm } from '@angular/forms';
import { AlertService } from './../../services/alert/alert.service';
import { SchedulingService } from './../../services/scheduling/scheduling.service';
import { Scheduling } from './../../models/scheduling.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scheduling-home',
  templateUrl: './scheduling-home.component.html',
  styleUrls: ['./scheduling-home.component.css'],
  providers: [SchedulingService, AlertService],
})
export class SchedulingHomeComponent implements OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;
  schedulings: Scheduling[];
  codPost;
  codContent;

  constructor(
    private schedulingService: SchedulingService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
  }
  delete() {
    this.closeDialog();
    this.schedulingService.delete(this.codPost, this.codContent) .subscribe(
      result => this.alertService.success('Agendamento deletado com sucesso'),
      error => this.alertService.error('Erro ao deletar agendamento')
    );
  }

  openDialog() {
    document.getElementById('popupMessage').style.visibility = 'visible';
    document.getElementById('popupMessage').style.opacity = '1';
  }

  closeDialog() {
    document.getElementById('popupMessage').style.visibility = 'hidden';
    document.getElementById('popupMessage').style.opacity = '0';
  }

}
