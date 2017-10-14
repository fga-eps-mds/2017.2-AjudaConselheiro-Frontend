import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CouncilGroup } from '../../models/index';
import { CouncilGroupService } from '../../services/index';

@Component({
  selector: 'app-create-council-group',
  templateUrl: './create-council-group.component.html',
  styleUrls: ['./create-council-group.component.css'],
  providers: [ CouncilGroupService ]
})

export class CreateCouncilGroupComponent implements OnInit {

  @ViewChild('formCouncilGroup') formCouncilGroup: NgForm;
  councilGroup: CouncilGroup;
  private location: any;

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
        this.location = result;
        console.log(this.location);
      },
      error => {
        console.log(error);
      });
  }
}
