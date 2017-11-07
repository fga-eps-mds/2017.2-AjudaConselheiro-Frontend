import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling/scheduling.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolService } from '../../services/index';
import { Search } from './../../models/search.model';

@Component({
  selector: 'app-scheduling-create',
  templateUrl: './scheduling-create.component.html',
  styleUrls: ['./scheduling-create.component.css']
})
export class SchedulingCreateComponent implements OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;
  scheduling: Scheduling;
  state: string;
  cities: Array<Object>;
  search: Search;
  schools: Array<Object>;
  collapsed = true;


  constructor(
    private schedulingService: SchedulingService,
    private router: Router,
    private schoolService: SchoolService,
  ) {}

  ngOnInit() {
    this.scheduling = new Scheduling();
    this.state = '';
    this.cities = new Array<Object>();
    this.schools = new Array<Object>();
    this.search = new Search();
  }

  searchSchool(): void {
    this.search.state = this.state;
    this.search.situation = '1';

    this.schoolService.searchSchool(this.search)
      .subscribe(
          result => {
            this.schools = this.filterSchools(result);
          },
          error => {
            alert(error);
            console.error(error);
      });
  }

  filterSchools(result: Array<Object>): Array<Object> {
    const res = [];

    result.forEach(subitem => {
      res.push(subitem);
    });

    console.log('Resultado da busca: ' , res[1]);
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
            alert(error);
            console.error(error);
      });
  }

  cityPush(result: Array<Object>): Array<Object> {
    console.log(result);

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
    console.log(city.name);

    const quote = /\"/g;
    const letters = /[\d:-]+/g;
    const numbers = /:[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    const removeQuote = city.name.replace(quote, '');

    city.name = removeQuote.replace(letters, '');
    city.code = removeQuote.replace(numbers, '');
    console.log(city);

    return city;
  }
  newScheduling(): void {
    // if (this.formScheduling.form.valid) {
    //   this.schedulingService.newScheduling(this.scheduling);
    //   this.router.navigate(['/agendamento']);
    // }
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
