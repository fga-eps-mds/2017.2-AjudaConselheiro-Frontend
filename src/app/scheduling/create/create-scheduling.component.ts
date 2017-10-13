import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SchoolService } from '../../services/index';

@Component({
  selector: 'app-create-scheduling',
  templateUrl: './create-scheduling.component.html',
  styleUrls: ['./create-scheduling.component.css']
})
export class CreateSchedulingComponent implements OnInit {

  @ViewChild('formScheduling') formScheduling: NgForm;
  scheduling: Scheduling;
  state: String;
  cities: Array<Object>;
  city = {
    name: <string> null,
    code: <string> null
  };

  constructor(
    private schedulingService: SchedulingService,
    private router: Router,
    private schoolService: SchoolService,
  ) {}

  ngOnInit() {
    this.scheduling = new Scheduling();
    this.state = new String;
    this.cities = new Array<Object>();
    this.city = {
      name: <string> null,
      code: <string> null
    };
  }

  searchSchool(): void {
    this.schoolService.searchSchool()
      .subscribe(
          result => {
            console.log(result);
          },
          error => {
            console.error(error);
      });
  }
  searchCity(): void {
    this.schoolService.searchCity(this.state)
      .subscribe(
          result => {
            console.log(result);
            result.forEach(subitem => {

              this.city.name = JSON.stringify(subitem);
              var quote = /\"/g;
              var letters = /[\d :-]+/;
              var numbers = /:([^:\\) ]+)/;
              console.log('antes: '+ this.city.name)
              var removeQuote = this.city.name.replace(quote, '');
              this.city.code = removeQuote.replace(numbers, '');
              this.city.name = removeQuote.replace(letters, '');
              console.log('codigo: '+ this.city.code);
              console.log('nome: '+ this.city.name);
              console.log(this.city);
              this.cities.push(this.city);
            });
            console.log(this.cities);
          },
          error => {
            console.error(error);
      });
  }

  newScheduling(): void {
    if (this.formScheduling.form.valid) {
      this.schedulingService.newScheduling(this.scheduling);
      this.router.navigate(['/agendamento']);
    }
  }
}
