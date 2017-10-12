import { Component, OnInit } from '@angular/core';

import { CouncilGroup } from '../models/index';
import { CouncilGroupService } from '../services/index';

@Component({
  selector: 'app-council-group',
  templateUrl: './council-group.component.html',
  styleUrls: ['./council-group.component.css'],
  providers: [ CouncilGroupService ]
})

export class CouncilGroupComponent implements OnInit {

  councilGroup: CouncilGroup;

  constructor(
    private councilGroupService: CouncilGroupService,
  ) { }

  ngOnInit() {
    this.councilGroup = new CouncilGroup();
  }

  createCouncilGroup(): void {
    this.councilGroupService.createCouncil(this.councilGroup)
      .subscribe(
      result => {
        this.councilGroup = result;
      },
      error => {
        console.log(error);
      });
  }
}
