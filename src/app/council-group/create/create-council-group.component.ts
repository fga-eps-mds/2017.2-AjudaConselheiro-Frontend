import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CouncilGroup } from '../../models/index';
import { CouncilGroupService } from '../../services/index';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-create-council-group',
  templateUrl: './create-council-group.component.html',
  styleUrls: ['./create-council-group.component.css'],
  providers: [CouncilGroupService]
})

export class CreateCouncilGroupComponent implements OnInit {

  @ViewChild('formCouncilGroup') formCouncilGroup: NgForm;
  councilGroup: CouncilGroup;
  private location: any;

  constructor(
    private councilGroupService: CouncilGroupService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.councilGroup = new CouncilGroup();
  }

  createCouncilGroup(): void {
    this.councilGroupService.createCouncil(this.councilGroup)
      .subscribe(
      result => {
        this.location = result;
        console.log(this.location);
        this.alertService.success('Conselho criado com sucesso!');
      },
      error => {
        console.log(error);
        if (error.status === 400) {
          this.alertService.error('Erro: este conselho já está cadastrado no sistema!');
        } else if (error.status > 400 && error.status < 500) {
          this.alertService.error('Erro: falha na comunicação com o sistema!');
        }
      });
  }

  success(message: string) {
    this.alertService.success(message);
  }

  error(message: string) {
    this.alertService.error(message);
  }

  info(message: string) {
    this.alertService.info(message);
  }

  warn(message: string) {
    this.alertService.warn(message);
  }

  clear() {
    this.alertService.clear();
  }
}
