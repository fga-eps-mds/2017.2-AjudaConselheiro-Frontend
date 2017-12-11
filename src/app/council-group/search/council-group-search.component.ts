import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { CouncilGroupSearchAbstract } from './council-group-search-abstract.component';
import { CouncilGroup } from '../../models/index';
import { Notification } from '../../models/notification';
import {
  CouncilGroupService,
  AlertService,
  IbgeService,
  UserService,
  NotificationService,
  ProfileService
} from '../../services/index';

@Component({
  selector: 'app-council-group-search',
  templateUrl: './council-group-search.component.html',
  styleUrls: ['./council-group-search.component.css'],
  providers: [
    CouncilGroupService,
    IbgeService,
    UserService,
    NotificationService,
    ProfileService
  ]
})
export class CouncilGroupSearchComponent extends CouncilGroupSearchAbstract implements OnInit{
  @ViewChild('formCouncilGroupsearch') formCouncilGroupSearch: NgForm;
  public councilGroup: CouncilGroup;
  private councilSubs: Subscription;
  private searchSubs: Subscription;
  private stateSubs: Subscription;
  public foundCouncil = false;
  public codGrupo: number;
  public description = '';
  public biography = '';
  public stateId = '0';
  public open = false;
  public state = '';
  public city = '';


  constructor(
    public councilGroupService: CouncilGroupService,
    public notificationService: NotificationService,
    public profileService: ProfileService,
    public alertService: AlertService,
    public ibgeService: IbgeService,
    public userService: UserService,
  ) {
    super(notificationService, alertService, profileService, userService);
  }

  ngOnInit() {
    this.councilGroup = new CouncilGroup();
  }

  searchCouncilGroup(): void {
    this.foundCouncil = false;
    // Creates new councilGroup to allow multiple searches
    if (this.councilGroup.municipio === undefined) {
      this.councilGroup = new CouncilGroup();
    }
    this.getStateAbbr();
  }

  // Get state sigla with state id and after that register the council group with the state sigla
  getStateAbbr() {
    this.stateSubs = this.ibgeService
      .getState(this.stateId)
      .subscribe(
        result => this.getStateAbbrResult(result),
        error => this.alertService.error('Erro ao selecionar estado'),
        () => this.getCouncilGroups()
      );
  }

  getStateAbbrResult(result: any): void {
    this.state = result.sigla;
    this.description = 'CAE-' + this.state + '-' + this.city;
    console.log(this.state);
  }

  getCouncilGroups() {
    this.searchSubs = this.councilGroupService
      .getCouncilGroups()
      .subscribe(
        result => this.getCouncilGroupsResult(result),
        error => this.alertService.error('Erro no servidor, tente novamente!')
      );
  }

  getCouncilGroupsResult(result: any): void {
    this.filterCouncil(result);
    if (this.foundCouncil) {
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
        this.codGrupo = element.codGrupo;
        console.log(this.councilGroup);
        this.foundCouncil = true;
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
    this.foundCouncil = false;
    state
      ? (this.stateId = state)
      : this.alertService.warn('Nenhum estado selecionado');
  }

  // Listen IBGE city EventEmitter()
  chosenCity(city: string) {
    city
      ? (this.city = city)
      : this.alertService.warn('Nenhuma cidade selecionada');
  }

  // Has (state + city) assigned?
  hasLocation(): boolean {
    console.log(
      'State id: ',
      this.stateId,
      '\n\nState: ',
      this.state,
      '\n\nCity: ',
      this.city
    );
    return this.stateId && 0 !== this.city.length;
  }

  sendNotification() {
    this.closeDialog();
    this.foundPresident = false;

    // I get all the application's advisors
    this.councilSubs = this.councilGroupService
      .getMembersCouncilGroup(this.codGrupo)
      .subscribe(
        result => this.getCodMembers(result),
        error => this.alertService.error('Erro no servidor, tente novamente!'),
        () => {
          if (!this.foundPresident && this.go) {
            this.alertService.error(
              'Não existe presidente para o conselho escolhido!'
            );
          }
        }
      );
  }
}
