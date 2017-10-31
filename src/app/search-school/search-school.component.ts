import { Component, OnInit } from '@angular/core';

import { AlertService, SchoolService } from '../services/index';
import { SearchSchool } from '../models/search-school.model';

@Component({
  selector: 'app-search-school',
  templateUrl: './search-school.component.html',
  styleUrls: ['./search-school.component.css'],
  providers: [ SchoolService ]
})
export class SearchSchoolComponent implements OnInit {

  state = '';
  cities: Array<Object> = null;
  school: SearchSchool = null;
  schools: Array<SearchSchool> = null;
  collapsed = true;
  hasSchool: boolean;
  habilitateChecklist: boolean = null;

  constructor(
    private schoolService: SchoolService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.state = '';
    this.cities = new Array<Object>();
    this.schools = new Array<Object>();
    this.school = new SearchSchool();
    this.schoolService.hasSchool$.subscribe(hasSchool => this.hasSchool = hasSchool);
  }

  searchSchool(): void {
    this.school.state = this.state;
    this.school.situation = '1';

    this.schoolService.searchSchool(this.school)
      .subscribe(
        result => {
          this.schools = this.filterSchools(result);
          if (this.schools.length === 0) {
            this.alertService.warn('Nenhuma escola encontrada!');
          }
        },
        error => {
          console.log(error);
      });
  }

  filterSchools(result: Array<Object>): Array<Object> {
    const res = [];

    result.forEach(subitem => {
      res.push(subitem);
    });

    return res[1];
  }

  searchCity(): void {
    this.schoolService.searchCity(this.state)
      .subscribe(
        result => {
          this.cities = this.cityPush(result);
          console.log(this.cities);
        },
        error => {
          this.alertService.error('Campo Estado inválido!');
      });
  }

  cityPush(result: Array<Object>): Array<Object> {

    const cities = [];

    result.forEach(subitem => {
      const untreated = JSON.stringify(subitem);
      const city = this.cityFilter(untreated);
      cities.push(city);
    });

    return cities;
  }

  cityFilter(untreated: string): Object {
    const city = {
      name: <string> null,
      code: <string> null
    };
    city.name = untreated;

    const quote = /\"/g;
    const colon = /:/;
    const letters = /[\d:-]+/g;
    const numbers = /:[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

    const removeQuote = city.name.replace(quote, '');
    city.name = removeQuote.replace(letters, '');
    city.code = removeQuote.replace(numbers, '');

    return city;
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  getChosenSchool(school: string) {
    this.schoolService.getSchool(school);
  }

  schoolCheck() {
    this.schoolService.setHasSchool(true);
    console.log(this.hasSchool);
  }
}
