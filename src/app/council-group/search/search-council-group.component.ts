import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { IbgeService } from '../../services/index';

@Component({
  selector: 'app-search-council-group',
  templateUrl: './search-council-group.component.html',
  styleUrls: ['./search-council-group.component.css'],
  providers: [IbgeService]
})

export class SearchCouncilGroupComponent implements OnInit, OnChanges {
  @Input() state: string;
  city: string;
  states: Array<Object>;
  cities: Array<Object>;

  constructor(
    private ibgeService: IbgeService
  ) { }

  ngOnInit() {
    this.states = this.ibgeService.statesRequest();
  }

  ngOnChanges(state) {
    this.cities = this.ibgeService.citiesRequest(state);
  }
}
