import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolService } from '../../services/index';
import { SearchSchool } from './../../models/search-school.model';

@Component({
  selector: 'app-create-scheduling',
  templateUrl: './create-scheduling.component.html',
  styleUrls: ['./create-scheduling.component.css']
})
export class CreateSchedulingComponent implements OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;
  scheduling: Scheduling;
  state: string;
  cities: Array<Object>;
  search: SearchSchool;
  schools: Array<Object>;


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
    this.search = new SearchSchool();
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
    var res = [];

    result.forEach(subitem => {
      res.push(subitem);
    });

    console.log("Resultado da busca: ", res[1]);
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

  cityPush(result: Array<Object>): Array<Object>{
    console.log(result);

    var cities = [];

    result.forEach(subitem => {
      var untreated = JSON.stringify(subitem);
      var city = this.cityFilter(untreated);
      cities.push(city);
    });

    return cities;
  }

  cityFilter(untreated: string): Object{
    var city = {
      name: <string> null,
      code: <string> null
    };
    city.name = untreated;
    console.log(city.name)
    var quote = /\"/g;
    var colon = /:/;
    var letters = /[\d:-]+/g;
    var numbers = /:[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

    // console.log('antes: '+ this.city.name);

    var removeQuote = city.name.replace(quote, '');
    city.name = removeQuote.replace(letters, '');
    city.code = removeQuote.replace(numbers, '');

    // console.log('codigo: '+ this.city.code);
    // console.log('nome: '+ this.city.name);
    console.log(city);
    return city;
  }
  newScheduling(): void {
    if (this.formScheduling.form.valid) {
      this.schedulingService.newScheduling(this.scheduling);
      this.router.navigate(['/agendamento']);
    }
  }

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
