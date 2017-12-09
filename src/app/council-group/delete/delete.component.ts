import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CouncilGroup } from '../../models/index';
import { CouncilGroupService, AlertService, IbgeService } from '../../services/index';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class CouncilGroupDeleteComponent implements OnInit {

  public councils: any[] = [0];
  council: CouncilGroup;

  constructor(
    private councilService: CouncilGroupService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAll();
    this.council = new CouncilGroup();
  }

  getAll() {
    const token = localStorage.getItem('token');
    if (token) {
      this.councilService.getCouncilGroups()
      .subscribe(
        (res) => {
          this.councils = res;
        },
        (error) => {
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
          }
        });
    } else {
      this.alertService.warn('Você precisa estar logado');
      this.router.navigate(['/login']);
    }
  }

  deleteCouncil(cod: number) {
    this.councilService.deleteCouncil(cod)
    .subscribe(
      (res) => {
        this.councils = res;
        this.router.navigate(['/conselho/deletar']);
      },
      (error) => {
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
        }
      });
  }

}
