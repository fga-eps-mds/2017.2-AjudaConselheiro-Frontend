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
            this.states = this.cityPush(result);
            console.log(this.states);
          },
          error => {
            alert(error);
            console.error(error);
      });
  }

  cityPush(result: Array<Object>): Array<Object>{
    console.log(result);

    var cities = [];

    result.forEach(subitem => {
      var untreated = JSON.stringify(subitem['sigla']);
      var city = this.cityFilter(untreated);
      cities.push(city);
    });

    return cities;
  }

  cityFilter(untreated: string): string{
    var name = untreated;
    var quote = /\"/g;
    name = name.replace(quote, '');
    return name;
  }
}
