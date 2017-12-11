import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CouncilGroup } from '../../models/index';
import { CouncilGroupService, AlertService, IbgeService, ProfileService, UserService, NotificationService } from '../../services/index';
import { CouncilGroupDeleteAbstract } from './delete-abstract.component';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class CouncilGroupDeleteComponent extends CouncilGroupDeleteAbstract implements OnInit {

  public councils: any[] = [0];
  council: CouncilGroup;

  constructor(
    private councilService: CouncilGroupService,
    public alertService: AlertService,
    private router: Router,
    public profileService: ProfileService,
    public userService: UserService,
    public notificationService: NotificationService
  ) {
    super(notificationService, alertService, profileService, userService);
   }

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
