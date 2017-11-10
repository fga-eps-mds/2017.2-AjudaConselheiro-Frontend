import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling/scheduling.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolService, AlertService } from '../../services/index';
import { Search } from './../../models/search.model';
import { SchedulingCreateInterface } from './../scheduling-create-interface.component';

@Component({
  selector: 'school-visit',
  templateUrl: './school-visit.component.html',
  styleUrls: ['./school-visit.component.css']
})
export class SchoolVisitComponent implements SchedulingCreateInterface, OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;
  scheduling: Scheduling;
  state: string;
  cities: Array<Object>;
  search: Search;
  schools: Array<Object>;
  collapsed = true;
  postType = 138;
  postText = 'Visita Escolar';

  constructor(
    private schoolService: SchoolService,
    private schedulingService: SchedulingService,
    private router: Router,
    private alertService: AlertService
  ){}

  ngOnInit() {
    this.state = '';
    this.cities = new Array<Object>();
    this.schools = new Array<Object>();
    this.search = new Search();
  }

  newScheduling(): void {
    if (this.formScheduling.form.valid) {
      this.schedulingService.newScheduling(this.scheduling, this.postType, this.postText);
    }
  }

  navigate() {
    this.router.navigate(['/agendamento']);
  }

  result() {
    this.alertService.success('Visita escolar cadastrada com sucesso.');
  }

  error(status: any) {
    if (status === 400) {
      this.alertService.warn('Erro!');
    } else {
      this.alertService.error('Erro: falha na comunicação com o sistema!');
    }
  }

  register(): void {
    this.schedulingService.newScheduling(this.scheduling, this.postType, this.postText)
      .subscribe(
      result => {
        this.result();
      },
      error => {
        this.error(error.status);
      });
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
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
