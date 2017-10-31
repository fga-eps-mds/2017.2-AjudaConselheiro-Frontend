import { Component, OnInit } from '@angular/core';

import { ChecklistService, AlertService } from '../../services/index';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.css'],
  providers: [ ChecklistService ]
})

export class ChecklistListComponent implements OnInit {
  checklist = null;

  constructor(
    private alertService: AlertService,
    private checklistService: ChecklistService
  ) { }

  ngOnInit() {
  }

}
