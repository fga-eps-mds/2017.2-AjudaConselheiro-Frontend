import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { IbgeService, CouncilGroupService } from '../../services/index';
import { State } from '../../models/index';

@Component({
  selector: 'app-search-council-group',
  templateUrl: './search-council-group.component.html',
  styleUrls: ['./search-council-group.component.css'],
  providers: [IbgeService]
})

export class SearchCouncilGroupComponent implements OnInit, OnChanges {
  @Input() state: any;
  @Input() city: string;
  stateSigla: string;
  states: Array<State>;
  cities: Array<Object>;

  constructor(
    private ibgeService: IbgeService,
    private councilGroupService: CouncilGroupService
  ) { }

  ngOnInit() {
    this.states = this.ibgeService.statesRequest();
  }

  ngOnChanges() {
    this.cities = this.ibgeService.citiesRequest(this.state);
    if (this.city !== undefined) {
      console.log(this.stateSigla);
      this.councilGroupService.searchStates(this.getCAEName());
    }
  }

  getCAEName(): string {
    return 'CAE-' + this.getStateNameById() + '-' + this.city;
  }

  getStateNameById(): string {
    const stateSigla = this.states.filter(x => x.id === this.state)[0];
    return stateSigla.sigla;
  }
}
