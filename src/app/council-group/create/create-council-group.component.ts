import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CouncilGroupCreate } from '../../models/index';
import { CouncilGroupCreateService, AlertService } from '../../services/index';

@Component({
  selector: 'app-create-council-group',
  templateUrl: './create-council-group.component.html',
  styleUrls: ['./create-council-group.component.css'],
  providers: [CouncilGroupCreateService]
})

export class CouncilGroupCreateComponent implements OnInit {

  @ViewChild('formCouncilGroupCreate') formCouncilGroupCreate: NgForm;
  councilGroupCreate: CouncilGroupCreate = null;
  private location: any = null;

  constructor(
    private councilGroupCreateService: CouncilGroupCreateService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.councilGroupCreate = new CouncilGroupCreate();
  }

  createCouncilGroupCreate(): void {
    this.councilGroupCreateService.createCouncil(this.councilGroupCreate)
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

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}

