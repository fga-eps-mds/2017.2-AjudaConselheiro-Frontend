import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';

import { State, CouncilGroup } from '../../models/index';
import { IbgeService, CouncilGroupService, AlertService } from '../../services/index';

@Component({
  selector: 'app-council-group-search',
  templateUrl: './council-group-search.component.html',
  styleUrls: ['./council-group-search.component.css'],
  providers: [IbgeService]
})

export class CouncilGroupSearchComponent implements OnInit, OnChanges {
  @Input() state: any;
  @Input() city: string;
  stateSigla: string;
  council: CouncilGroup;
  states: Array<State>;
  cities: Array<Object>;
  showCouncil: boolean;

  constructor(
    private ibgeService: IbgeService,
    private councilGroupService: CouncilGroupService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.states = this.ibgeService.statesRequest();
    this.showCouncil = false;
  }

  ngOnChanges(change) {
    this.showCouncil = false;
    if (change === this.state) {
      // When state changes, the list os cities is updated
      this.cities = this.ibgeService.citiesRequest(this.state);
      this.council = this.stateSigla = this.city = undefined;
      console.log(this.state);
    }
    if (this.city !== undefined) {
      // When a city is selected, we get the CAE
      this.council = undefined;
      this.searchCouncils(this.getCAEName());
    }
  }

  searchCouncils(description: string): void {
    this.councilGroupService.getAjudaConselheiroCouncilGroups(description)
      .subscribe(
          result => {
            this.council = new CouncilGroup();
            if (result !== undefined) {
              this.alertService.success('Conselho encontrado com sucesso!');
              this.dismemberCouncilAttributes(result);
              this.showCouncil = true;
            } else {
              this.alertService.error('Conselho não encontrado');
              this.showCouncil = false;
            }
          },
          error => {
            alert(error);
            console.error(error);
      });
  }

  getCAEName(): string {
    return 'CAE-' + this.getStateNameById() + '-' + this.city;
  }

  getStateNameById(): string {
    const stateSigla = this.states.filter(x => x.id === this.state)[0];
    this.stateSigla = stateSigla.sigla;
    return this.stateSigla;
  }

  dismemberCouncilAttributes(result: any): void {
    const description = result.descricao;
    const attributes = description.split('-');

    this.council.descricao = description;
    this.council.estado = attributes[1];
    this.council.municipio = attributes[2];
  }
}
