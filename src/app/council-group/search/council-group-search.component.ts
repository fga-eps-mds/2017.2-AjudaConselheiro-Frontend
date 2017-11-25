import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { CouncilGroup } from '../../models/index';
import { Notification } from '../../models/notification';
import { CouncilGroupService, AlertService,
        IbgeService, UserService,
        NotificationService } from '../../services/index';

@Component({
  selector: 'app-council-group-search',
  templateUrl: './council-group-search.component.html',
  styleUrls: ['./council-group-search.component.css'],
  providers: [CouncilGroupService, IbgeService, UserService, NotificationService]
})

export class CouncilGroupSearchComponent implements OnInit, OnDestroy {
  @ViewChild('formCouncilGroupsearch') formCouncilGroupSearch: NgForm;
  private notificationSubs: Subscription;
  public councilGroup: CouncilGroup;
  public notification: Notification;
  private searchSubs: Subscription;
  private stateSubs: Subscription;
  private usersSubs: Subscription;
  public foundPresident = false;
  public foundCouncil = false;
  public codPresident: number;
  public description = '';
  public biography = '';
  public stateId = '0';
  public open = false;
  public state = '';
  public city = '';

  constructor(
    private councilGroupService: CouncilGroupService,
    private alertService: AlertService,
    private ibgeService: IbgeService,
    private userService: UserService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.councilGroup = new CouncilGroup();
  }

  ngOnDestroy() {
    this.stateSubs.unsubscribe();
    this.searchSubs.unsubscribe();
    this.usersSubs.unsubscribe();
    this.notificationSubs.unsubscribe();
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
    this.usersSubs = this.userService.getUsers()
      .subscribe(
        result => this.sendNotificationResult(result),
        error => this.alertService.error('Erro no servidor, tente novamente!')
      );
  }

  sendNotificationResult(result: any) {
    this.getPresidente(result);
    if (this.foundPresident) {
      // If the president is found I'll send the notification
      this.send();
    } else {
      this.alertService.error('Não existe um presidente para o conselho escolhido');
    }
  }

  getPresidente(result: any) {
    this.biography = 'Estado: ' + this.state + '; Municipio: ' + this.city;
    result.forEach(element => {
      if (element.biografia === this.biography
          && element.emailVerificado === true) {
        this.foundPresident = true;
        this.codPresident = element.cod;
        console.log(this.codPresident);
      }
    });
  }

  send() {
    this.notificationSubs = this.notificationService.createNotification(this.createNotification())
      .subscribe(
        result => this.alertService.success('Solicitação enviada ao presidente do conselho com sucesso!'),
        error => this.alertService.error('Erro ao enviar solicitação ao presidente do conselho!')
      );
  }

  createNotification() {
    this.notification = new Notification();
    this.notification.author =  this.userService.getUserCod();
    this.notification.recipient = this.codPresident;
    this.notification.type = 'Participar de um conselho';
    this.notification.description = 'Eu, ' +
      this.userService.getUserName() + ', posso participar do seu Conselho?';
    return this.notification;
  }
}
