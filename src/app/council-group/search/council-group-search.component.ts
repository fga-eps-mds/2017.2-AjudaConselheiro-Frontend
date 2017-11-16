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
  private state = '';
  private city = '';
  private description = '';
  public found;

  constructor(
    public councilGroupService: CouncilGroupService,
    private alertService: AlertService,
    private router: Router,
    private ibgeService: IbgeService
  ) {}

  ngOnInit() {
    this.councilGroup = new CouncilGroup();
  }

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
          this.councilGroup.estado = result.sigla;
          console.log(this.councilGroup.estado);
          this.description =
            'CAE-' +
            this.councilGroup.estado +
            '-' +
            this.councilGroup.municipio;
        },
        error => {
          this.alertService.error('Erro ao selecionar estado');
        },
        () => {
          this.searchSubs = this.councilGroupService
            .getAjudaConselheiroCouncilGroups()
            .subscribe(
              result => {
                this.found = false;
                this.filterCouncil(result);
                if (this.found) {
                  this.alertService.success('Conselho ' + this.description + ' encontrado!');
                }else {
                  this.alertService.warn('Conselho não cadastrado!');
                }
              },
              error => {
                console.error(error);
              }
            );
        }
      );
  }

  filterCouncil(result: any) {
    result.forEach(element => {
      if (element.descricao === this.description) {
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
}
