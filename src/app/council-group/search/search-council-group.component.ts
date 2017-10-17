import { Component, OnInit } from '@angular/core';
import { CouncilGroupService } from '../../services/index';

@Component({
  selector: 'app-search-council-group',
  templateUrl: './search-council-group.component.html',
  styleUrls: ['./search-council-group.component.css'],
  providers: [CouncilGroupService]
})

export class SearchCouncilGroupComponent implements OnInit {
  state: string;
  city: string;
  states: Array<Object>;
  cities: Array<Object>;
  counsilGroup: Object;

  constructor(
    private councilGroupService: CouncilGroupService
  ) { }

  ngOnInit() {
    this.states = new Array<Object>();
    this.cities = new Array<Object>();
    this.searchStates();
  }

  searchStates(): void {
    this.councilGroupService.getStates()
      .subscribe(
          result => {
            this.states = result;
            console.log(this.states);
          },
          error => {
            alert(error);
            console.error(error);
      });
  }
}
