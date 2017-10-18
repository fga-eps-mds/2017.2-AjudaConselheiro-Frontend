import { Component, OnInit } from '@angular/core';
import { IbgeService } from '../../services/index';

@Component({
  selector: 'app-search-council-group',
  templateUrl: './search-council-group.component.html',
  styleUrls: ['./search-council-group.component.css'],
  providers: [IbgeService]
})

export class SearchCouncilGroupComponent implements OnInit {
  state: string;
  city: string;
  states: Array<Object>;
  cities: Array<Object>;
  counsilGroup: Object;

  constructor(
    private ibgeService: IbgeService
  ) { }

  ngOnInit() {
    this.states = this.ibgeService.statesRequest();
    this.cities = new Array<Object>();
  }
}
