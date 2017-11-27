import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

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
export class CouncilGroupSearchComponent implements OnInit, OnDestroy {
  @ViewChild('formCouncilGroupsearch') formCouncilGroupSearch: NgForm;
  private notificationSubs: Subscription;
  public councilGroup: CouncilGroup;
  public notification: Notification;
  private searchSubs: Subscription;
  private stateSubs: Subscription;
  private councilSubs: Subscription;
  public foundPresident = false;
  public foundCouncil = false;
  public members: Array<String>;
  public codPresident: string;
  public codGrupo: number;
  public description = '';
  public biography = '';
  public stateId = '0';
  public open = false;
  public state = '';
  public city = '';
  public go;

  constructor(
    private councilGroupService: CouncilGroupService,
    private notificationService: NotificationService,
    private alertService: AlertService,
    private ibgeService: IbgeService,
    private userService: UserService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.councilGroup = new CouncilGroup();
  }

  ngOnDestroy() {
    this.stateSubs.unsubscribe();
    this.searchSubs.unsubscribe();
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

  openDialog() {
    document.getElementById('overlay').style.visibility = 'visible';
    document.getElementById('overlay').style.opacity = '1';
  }

  closeDialog() {
    document.getElementById('overlay').style.visibility = 'hidden';
    document.getElementById('overlay').style.opacity = '0';
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

  getCodMembers(result: any) {
    this.members = new Array<String>();
    result.forEach(element => {
      this.members.push(element.links[1].href);
    });
    if (this.members.length > 0) {
      this.getPresidente();
    } else {
      this.alertService.error('Não há membros vinculados ao conselho escolhido!');
    }
  }

  getPresidente() {
    let codUser: string;
    this.members.forEach(element => {
      codUser = element.substring(element.length - 4, element.length);
      this.go = false;
      this.profileService.getProfile(codUser).subscribe(
        result => this.getPresResult(result, codUser),
        error => this.alertService.error('Erro ao buscar presidente do conselho')
      );
    });
  }

  getPresResult(result: any, codUser: string) {
    this.go = true;
    if (result.tipoPerfil.codTipoPerfil === 238) {
      this.foundPresident = true;
      this.codPresident = codUser;
      this.send();
    }
  }

  send() {
    this.notificationSubs = this.notificationService
      .createNotification(this.createNotification())
      .subscribe(
        result =>
          this.alertService.success(
            'Solicitação enviada ao presidente do conselho com sucesso!'
          ),
        error =>
          this.alertService.error(
            'Erro ao enviar solicitação ao presidente do conselho!'
          )
      );
  }

  createNotification() {
    this.notification = new Notification(
      'Eu, ' +
        this.userService.getUserName() +
        ', posso participar do seu Conselho?',
      this.codPresident,
      this.userService.getUserCod(),
      'Participar de um conselho'
    );
    return this.notification;
  }
}
