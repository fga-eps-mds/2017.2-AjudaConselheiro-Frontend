import { Injectable } from '@angular/core';

import { Scheduling } from './../models/scheduling.model';


@Injectable()
export class SchedulingService {

  constructor() { }

  listAllSchedulings():Scheduling[]{
    const schedulings = localStorage['schedulings'];
    return schedulings ? JSON.parse(schedulings):[];
  }


  newScheduling(scheduling: any): void {
    const schedulings = this.listAllSchedulings();
    scheduling.id = new Date().getTime();
    schedulings.push(scheduling);
    localStorage['schedulings'] = JSON.stringify(schedulings);
  }

  searchSchedulingId(id: number): Scheduling{
    const schedulings: Scheduling[] = this.listAllSchedulings();
    return schedulings.find(scheduling => scheduling.id === id);
  }

  updateScheduling(scheduling: Scheduling): void{
    const schedulings: Scheduling[] = this.listAllSchedulings();
    schedulings.forEach((obj,index,objs)=>{
      if(scheduling.id === obj.id){
        objs[index] = scheduling;
      }
    });
    localStorage['schedulings'] = JSON.stringify(schedulings);
  }
  deleteScheduling(id: number): void{
    let schedulings: Scheduling[] = this.listAllSchedulings();
    schedulings = schedulings.filter(scheduling => scheduling.id !== id);
    localStorage['schedulings'] = JSON.stringify(schedulings);
  }
  }

