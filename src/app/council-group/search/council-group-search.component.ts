import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { CouncilGroup } from '../../models/index';
import {
  CouncilGroupService,
  AlertService,
  IbgeService
} from '../../services/index';

@Component({
  selector: 'app-council-group-search',
  templateUrl: './council-group-search.component.html',
  styleUrls: ['./council-group-search.component.css'],
  providers: [CouncilGroupService, IbgeService]
})

export class CouncilGroupSearchComponent implements OnInit, OnDestroy {
  @ViewChild('formCouncilGroupsearch') formCouncilGroupSearch: NgForm;
  private stateSubs: Subscription;
  private searchSubs: Subscription;
  public councilGroup: CouncilGroup;
  public state = '';
  public stateId = '0';
  public city = '';
  public description = '';
  public found = false;

  constructor(
    private ibgeService: IbgeService,
    private councilGroupService: CouncilGroupService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.councilGroup = new CouncilGroup();
  }

  ngOnDestroy() {
    this.stateSubs.unsubscribe();
    this.searchSubs.unsubscribe();
  }

  searchCouncilGroup(): void {
    this.found = false;
    // Creates new councilGroup to allow multiple searches
    if (this.councilGroup.municipio === undefined) {
      this.councilGroup = new CouncilGroup();
    }
    this.getStateAbbr();
  }

  // Get state sigla with state id and after that register the council group with the state sigla
  getStateAbbr() {
    this.stateSubs = this.ibgeService.getState(this.stateId)
      .subscribe(
        (result) => this.getStateAbbrResult(result),
        (error) => this.alertService.error('Erro ao selecionar estado'),
        () => this.getCouncilGroups());
  }

  getStateAbbrResult(result: any): void {
    this.state = result.sigla;
    this.description = 'CAE-' + this.state + '-' + this.city;
    console.log(this.state);
  }

  getCouncilGroups() {
    this.searchSubs = this.councilGroupService.getCouncilGroups()
      .subscribe(
        (result) => this.getCouncilGroupsResult(result),
        (error) => this.alertService.error('Erro no servidor, tente novamente!'));
  }

  getCouncilGroupsResult(result: any): void {
    this.filterCouncil(result);
    if (this.found) {
      this.alertService.success('Conselho de ' + this.city + ' encontrado!');
    } else {
      this.alertService.warn('Conselho de ' + this.city + ' não cadastrado!');
    }
  }

  // Find council with the state and city that were informed by user
  filterCouncil(result: any) {
    result.forEach(element => {
      if (element.descricao === this.description) {
        this.councilGroup = element;
        console.log(this.councilGroup);
        this.found = true;
      }
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
    this.found = false;
    state ? (this.stateId = state) : this.alertService.warn('Nenhum estado selecionado');
  }

  // Listen IBGE city EventEmitter()
  chosenCity(city: string) {
    city ? (this.city = city) : this.alertService.warn('Nenhuma cidade selecionada');
  }

  // Has (state + city) assigned?
  hasLocation(): boolean {
    console.log('State id: ', this.stateId, '\n\nState: ', this.state, '\n\nCity: ', this.city);
    return this.stateId && 0 !== this.city.length;
  }
}
