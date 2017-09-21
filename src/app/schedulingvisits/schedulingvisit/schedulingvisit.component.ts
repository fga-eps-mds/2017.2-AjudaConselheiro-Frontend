import { Schedulingvisit } from './schedulingvisit.model';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-schedulingvisit',
  templateUrl: './schedulingvisit.component.html'
})
export class SchedulingvisitComponent implements OnInit {

  @Input() schedulingvisit: Schedulingvisit;

  constructor() { }

  ngOnInit() {
  }

}
