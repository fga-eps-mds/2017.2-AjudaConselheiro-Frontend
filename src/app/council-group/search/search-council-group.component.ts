import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';
import { IbgeService, CouncilGroupService } from '../../services/index';
import { State, CouncilGroup } from '../../models/index';

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
  council: CouncilGroup;
  states: Array<State>;
  cities: Array<Object>;
  showCouncil: boolean;

  constructor(
    private ibgeService: IbgeService,
    private councilGroupService: CouncilGroupService
  ) { }

  ngOnInit() {
    this.states = this.ibgeService.statesRequest();
    this.showCouncil = false;
    if (this.council === undefined) {
      this.showCouncil = false;
    } else {
      this.showCouncil = true;
    }
  }

  ngOnChanges(change) {
    if (change === this.state) {
      this.cities = this.ibgeService.citiesRequest(this.state);
      this.council = this.stateSigla = this.city = undefined;
      console.log(this.state);
    }
    if (this.city !== undefined) {
      this.council = undefined;
      this.council = this.councilGroupService.concilRequest(this.getCAEName());
      console.log(this.city);
      console.log(this.council);
    }
  }

  getCAEName(): string {
    return 'CAE-' + this.getStateNameById() + '-' + this.city;
  }

  getStateNameById(): string {
    const stateSigla = this.states.filter(x => x.id === this.state)[0];
    this.stateSigla = stateSigla.sigla;
    return this.stateSigla;
  }
}
