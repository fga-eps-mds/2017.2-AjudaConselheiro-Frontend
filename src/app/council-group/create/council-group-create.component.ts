import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CouncilGroup } from '../../models/index';
import { CouncilGroupService, AlertService, IbgeService } from '../../services/index';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-council-group-create',
  templateUrl: './council-group-create.component.html',
  styleUrls: ['./council-group-create.component.css'],
  providers: [
    CouncilGroupService,
    IbgeService
  ]
})

export class CouncilGroupCreateComponent implements OnInit, OnDestroy {

  @ViewChild('formCouncilGroupCreate') formCouncilGroupCreate: NgForm;
  private stateSubs: Subscription;
  private createSubs: Subscription;
  public councilGroup: CouncilGroup;
  public state = '';
  public city = '';

  constructor(
    public councilGroupService: CouncilGroupService,
    private alertService: AlertService,
    private router: Router,
    private ibgeService: IbgeService
  ) { }

  ngOnInit() {
    this.councilGroup = new CouncilGroup();
  }

  ngOnDestroy() {
    this.stateSubs.unsubscribe();
    this.createSubs.unsubscribe();
  }

  createCouncilGroup(): void {
    // Use state abbreviation instead of state id
    this.stateSubs = this.ibgeService.getState(this.councilGroup.estado)
      .subscribe(
        (result) => {
          console.log('Resultado Estado', result);
          this.councilGroup.estado = result['sigla'];
          console.log(this.councilGroup.estado);
        },
        (error) => {
          this.alertService.error('Erro ao selecionar estado');
        },
        () => {
          // Create council after getting right state
          this.createSubs = this.councilGroupService.createCouncil(this.councilGroup)
            .subscribe(
              (result) => {
                console.log(this.councilGroup);
                // Navigate to url that show details about the created council group
                // this.router.navigate(['/home']);
                this.alertService.success('Conselho de ' + this.councilGroup.municipio + ' criado com sucesso!');
              },
              (error) => {
                if (error.status === 400 ) {
                  this.alertService.error('O conselho de ' + this.councilGroup.municipio + ' já se encontra cadastrado!');
                } else if (error.status > 400) {
                  this.alertService.error('Falha ao criar conselho!');
                }
              });
          });
   }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  // Listen IBGE state EventEmitter()
  chosenState(state: string) {
    this.city = '';
    state ? this.state = this.councilGroup.estado = state : this.alertService.warn('Nenhum estado selecionado');
  }

  // Listen IBGE city EventEmitter()
  chosenCity(city: string) {
    city ? this.city = this.councilGroup.municipio = city : this.alertService.warn('Nenhuma cidade selecionada');
  }

  // Has (state + city) assigned?
  hasLocation(): boolean {
    console.log('State: ', this.state, '\n\nCity: ', this.city);
    if (this.state  && 0 !== this.city.length) {
      return true;
    }
    return false;
  }
}
