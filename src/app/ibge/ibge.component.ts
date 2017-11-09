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
  states: Array<State>;
  cities: Array<Object>;

  constructor(
    private ibgeService: IbgeService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.states = this.ibgeService.statesRequest();
  }

  ngOnChanges(change) {
    if (change === this.state) {
      // When state changes, the list os cities is updated
      this.cities = this.ibgeService.citiesRequest(this.state);
      console.log(this.state);
    }
    if (this.city !== undefined) {
      // When a city is selected, we get the CAE
      // this.council = undefined;
      // this.searchCouncils(this.getCAEName());
    }
  }

}
