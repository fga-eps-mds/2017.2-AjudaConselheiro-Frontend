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
  providers: [CouncilGroupService, IbgeService]
})

export class CouncilGroupCreateComponent implements OnInit {

  @ViewChild('formCouncilGroupCreate') formCouncilGroupCreate: NgForm;
  private getStateSubs: Subscription;
  private createSubs: Subscription;
  public councilGroup: CouncilGroup;
  public state = '';
  public stateId = '0';
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


  createCouncilGroup(): void {
    if (this.councilGroup.municipio === undefined) {
      this.councilGroup = new CouncilGroup();
    }
    // Use state abbreviation instead of state id
    this.getStateAbbr();
    // this.router.navigate(['/conselho']);
  }

  getStateAbbr(): void {
    this.getStateSubs = this.ibgeService.getState(this.stateId)
      .subscribe(
        (value) => this.getStateAbbrResult(value),
        // Create council after getting right state
        () => this.createCouncil());
  }

  getStateAbbrResult(result: any): void {
    this.state = result['sigla'];
    this.councilGroup.estado = this.state;
    console.log(this.councilGroup.estado);
  }

  createCouncil(): void {
    this.createSubs = this.councilGroupService.createCouncil(this.councilGroup)
      .subscribe(
        (result) => this.createCouncilResult(),
        (error) => this.createCouncilError(error.status));
  }

  createCouncilResult(): void {
    console.log(this.councilGroup);
    this.alertService.success('Conselho de ' + this.councilGroup.municipio + ' criado com sucesso!');
  }

  createCouncilError(status: number): void {
    if (status === 400) {
      this.alertService.error('O conselho de ' + this.councilGroup.municipio + ' já se encontra cadastrado!');
    } else {
      this.alertService.error('Erro no servidor, tente novamente!');
    }
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  // Listen IBGE state EventEmitter()
  chosenState(state: string): void {
    this.city = '';
    state ? this.stateId = this.councilGroup.estado = state : this.alertService.warn('Nenhum estado selecionado');
  }

  // Listen IBGE city EventEmitter()
  chosenCity(city: string): void {
    city ? this.city = this.councilGroup.municipio = city : this.alertService.warn('Nenhuma cidade selecionada');
  }

  // Has (state + city) assigned?
  hasLocation(): boolean {
    console.log('State id: ', this.stateId, '\n\nState: ', this.state, '\n\nCity: ', this.city);
    if (this.stateId  && 0 !== this.city.length) {
      return true;
    }
    return false;
  }
}
