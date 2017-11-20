import {
  Component,
  OnInit,
  EventEmitter,
  OnChanges,
  Output,
  Input
} from '@angular/core';

import { State } from '../models/index';
import { IbgeService, AlertService } from '../services/index';

@Component({
  selector: 'app-ibge',
  templateUrl: './ibge.component.html',
  styleUrls: ['./ibge.component.css'],
  providers: [IbgeService]
})

export class IbgeComponent implements OnInit, OnChanges {
  @Output() stateEmitter = new EventEmitter<string>();
  @Output() cityEmitter = new EventEmitter<string>();
  @Input() city;
  @Input() state;
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
      this.stateEmitter.emit(this.state);
    }
    if (change === this.city) {
      console.log('Cidade: ', this.city);
      this.cityEmitter.emit(this.city);
    }
  }

  // Get all states
  getStates() {
    this.ibgeService.getStates()
      .subscribe(
        (result) => this.getStatesResult(result),
        (error) => this.alertService.error(error));
  }


  getStatesResult(result: any) {
    result.sort(this.ibgeService.sortArray);
    this.states = this.ibgeService.filterState(result);
    console.log(this.states);
  }

  // Get all cities given a state
  getCities(state: string) {
    this.ibgeService.getCities(state)
      .subscribe(
        (result) => this.getCitiesResult(result),
        (error) => this.alertService.error(error));
  }

  getCitiesResult(result: any) {
    result.sort(this.ibgeService.sortArray);
    this.cities = this.ibgeService.filterCityName(result);
    console.log(this.cities);
  }
}
