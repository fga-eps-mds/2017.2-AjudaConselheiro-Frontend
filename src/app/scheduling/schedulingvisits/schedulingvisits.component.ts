import { Schedulingvisit } from './schedulingvisit/schedulingvisit.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-schedulingvisits',
  templateUrl: './schedulingvisits.component.html'
})
export class SchedulingvisitsComponent implements OnInit {

  schedulingvisits: Schedulingvisit[] = [
    {
      local: "bro",
      members: ['Pedrinho','Joana', 'cloclo'],
      date: 20122013,
      horary: 1015
    },
    {
      local: "brado",
      members: ['Pedrinho','Joana', 'clocl'],
      date: 20122013,
      horary: 1015
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
