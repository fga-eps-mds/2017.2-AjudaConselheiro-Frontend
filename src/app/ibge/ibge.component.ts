import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';

import { State } from '../models/index';
import { IbgeService, AlertService } from '../services/index';

@Component({
  selector: 'app-ibge',
  templateUrl: './ibge.component.html',
  styleUrls: ['./ibge.component.css'],
  providers: [IbgeService]
})

export class IbgeComponent implements OnInit, OnChanges {
  @Input() state: any;
  @Input() city: string;
  stateSigla: string;
  states: any = [];
  cities: any = [];

  constructor(
    private ibgeService: IbgeService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.states = this.getStates();
  }

  ngOnChanges(change) {
    // When state changes, the list os cities is updated
    if (change === this.state) {
      this.city = '';
      this.cities = this.getCities(this.state);
    }
    if (this.city !== undefined) {
      console.log('Cidade: ', this.city);
    }
  }

  // Get all states
  getStates() {
    this.ibgeService.getStates()
      .subscribe(
        (result) => {
          result.sort(this.ibgeService.sortArray);
          this.states = this.ibgeService.filterState(result);
          console.log(this.states);
        },
        (error) => {
          this.alertService.error(error);
        });
  }

  // Get all cities given a state
  getCities(state: string) {
    this.ibgeService.getCities(state)
      .subscribe(
        (result) => {
          result.sort(this.ibgeService.sortArray);
          this.cities = this.ibgeService.filterCityName(result);
          console.log(this.cities);
        },
        (error) => {
          this.alertService.error(error);
        });
  }
}
