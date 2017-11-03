import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SchoolService } from '../services/index';

@Component({
  moduleId: module.id,
  selector: 'app-checklist',
  templateUrl: 'checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  providers: [ SchoolService ]
})
export class ChecklistComponent implements OnInit {

  constructor(private schoolService: SchoolService) {}

  ngOnInit() {
  }
}
