import { Injectable } from '@angular/core';

import { SchedulingVisit } from './../models/scheduling-visit.model';


@Injectable()
export class SchedulingVisitService {

  constructor() { }

  listAllScheculingVisits():SchedulingVisit[]{
    const schedulingsVisits = localStorage['schedulingVisits'];
    return schedulingsVisits ? JSON.parse(schedulingsVisits):[];
  }


  newSchedulingVisit(schedulingVisit:SchedulingVisit): void {
    const schedulingVisits = this.listAllScheculingVisits();
    schedulingVisit.id = new Date().getTime();
    schedulingVisits.push(schedulingVisit);
    localStorage['schedulingVisits'] = JSON.stringify(schedulingVisits);
  }


}
