import { Scheduling } from './../../models/scheduling.model';
import { Injectable } from '@angular/core';


@Injectable()
export class SchedulingService {

  constructor() { }

  listAllScheculings(): Scheduling[] {
    const schedulings = localStorage['schedulings'];
    return schedulings ? JSON.parse(schedulings) : [];
  }

  newScheduling(scheduling: Scheduling): void {
    const schedulings = this.listAllScheculings();
    scheduling.id = new Date().getTime();
    schedulings.push(scheduling);
    localStorage['schedulings'] = JSON.stringify(schedulings);
  }

  updateScheduling(scheduling: Scheduling): void {
    const schedulings: Scheduling[] = this.listAllScheculings();
    schedulings.forEach((obj, index, objs) => {
      if (scheduling.id === obj.id) {
        objs[index] = scheduling;
      }
    });
    localStorage['schedulings'] = JSON.stringify(schedulings);
  }

  searchSchedulingId(id: number): Scheduling {
    const schedulings: Scheduling[] = this.listAllScheculings();
    return schedulings.find(scheduling => scheduling.id === id);
}

  deleteScheduling(id: number): void {
    let schedulings: Scheduling[] = this.listAllScheculings();
    schedulings = schedulings.filter(scheduling => scheduling.id !== id);
    localStorage['schedulings'] = JSON.stringify(schedulings);
  }
}
