import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CouncilGroup } from '../../models/index';
import {
  CouncilGroupService,
  AlertService,
  IbgeService
} from '../../services/index';
import { Subscription } from 'rxjs/Subscription';

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
  public arrayCouncil: CouncilGroup[];
  private state = '';
  private city = '';

  constructor(
    public councilGroupService: CouncilGroupService,
    private alertService: AlertService,
    private router: Router,
    private ibgeService: IbgeService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.stateSubs.unsubscribe();
    this.searchSubs.unsubscribe();
  }

  searchCouncilGroup(): void {
    this.stateSubs = this.ibgeService
      .getState(this.councilGroup.estado)
      .subscribe(
        result => {
          console.log('Resultado Estado', result);
          this.councilGroup.estado = result['sigla'];
          console.log(this.councilGroup.estado);
        },
        error => {
          this.alertService.error('Erro ao selecionar estado');
        },
        () => {
          this.searchSubs = this.councilGroupService
            .getAjudaConselheiroCouncilGroups()
            .subscribe(
              result => {
              },
              error => {
                console.error(error);
              }
            );
        }
      );
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
    state
      ? (this.state = this.councilGroup.estado = state)
      : this.alertService.warn('Nenhum estado selecionado');
  }

  // Listen IBGE city EventEmitter()
  chosenCity(city: string) {
    city
      ? (this.city = this.councilGroup.municipio = city)
      : this.alertService.warn('Nenhuma cidade selecionada');
  }

  // Has (state + city) assigned?
  hasLocation(): boolean {
    console.log('State: ', this.state, '\n\nCity: ', this.city);
    return this.state && 0 !== this.city.length;
  }

  dismemberCouncilAttributes(result: any): void {
    const description = result.descricao;
    const attributes = description.split('-');

    this.councilGroup.descricao = description;
    this.councilGroup.estado = attributes[1];
    this.councilGroup.municipio = attributes[2];
  }
}
