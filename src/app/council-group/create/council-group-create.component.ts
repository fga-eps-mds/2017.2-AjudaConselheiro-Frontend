import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CouncilGroup } from '../../models/index';
import { CouncilGroupService, AlertService } from '../../services/index';

@Component({
  selector: 'app-council-group-create',
  templateUrl: './council-group-create.component.html',
  styleUrls: ['./council-group-create.component.css'],
  providers: [CouncilGroupService]
})

export class CouncilGroupCreateComponent implements OnInit {

  @ViewChild('formCouncilGroupCreate') formCouncilGroupCreate: NgForm;
  councilGroup: CouncilGroup = null;
  private location: any = null;

  constructor(
    public councilGroupService: CouncilGroupService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.councilGroup = new CouncilGroup();
  }

  result(result: any) {
    this.location = result;
    console.log(this.location);
    this.alertService.success('Conselho criado com sucesso!');
  }

  error(status: number) {
    if (status === 400) {
      this.alertService.warn('Aviso: este conselho já está cadastrado no sistema!');
    } else if (status > 400 && status < 500) {
      this.alertService.error('Erro: falha na comunicação com o sistema!');
    }
  }

  createCouncilGroup(): void {
    this.councilGroupService.createCouncil(this.councilGroup)
      .subscribe(
      result => {
        this.result(result);
      },
      error => {
        this.error(error.status);
      });
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}

