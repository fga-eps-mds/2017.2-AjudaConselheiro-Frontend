import { Injectable } from '@angular/core';

import { SchedulingVisit } from './../models/scheduling-visit.model';


@Injectable()
export class SchedulingVisitService {

  constructor() { }

  listAllSchedulingVisits():SchedulingVisit[]{
    const schedulingsVisits = localStorage['schedulingVisits'];
    return schedulingsVisits ? JSON.parse(schedulingsVisits):[];
  }


  newSchedulingVisit(schedulingVisit:SchedulingVisit): void {
    const schedulingVisits = this.listAllSchedulingVisits();
    schedulingVisit.id = new Date().getTime();
    schedulingVisits.push(schedulingVisit);
    localStorage['schedulingVisits'] = JSON.stringify(schedulingVisits);
  }

  searchSchedulingVisitId(id: number): SchedulingVisit{
    const schedulingVisits: SchedulingVisit[] = this.listAllSchedulingVisits();
    return schedulingVisits.find(schedulingVisit => schedulingVisit.id === id);
  }

  updateSchedulingVisit(schedulingVisit: SchedulingVisit): void{
    const schedulingVisits: SchedulingVisit[] = this.listAllSchedulingVisits();
    schedulingVisits.forEach((obj,index,objs)=>{
      if(schedulingVisit.id === obj.id){
        objs[index] = schedulingVisit;
      }
    });
    localStorage['schedulingVisits'] = JSON.stringify(schedulingVisits);
  }
  deleteSchedulingVisit(id: number): void{
    let schedulingVisits: SchedulingVisit[] = this.listAllSchedulingVisits();
    schedulingVisits = schedulingVisits.filter(schedulingVisit => schedulingVisit.id !== id);
    localStorage['schedulingVisits'] = JSON.stringify(schedulingVisits);
  }
  statusChangeSchedulingVisit(id: number): void{
    const schedulingVisits: SchedulingVisit[] = this.listAllSchedulingVisits();
    schedulingVisits.forEach((obj,index,objs) => {
      if(id === obj.id) {
        objs[index].finish = !obj.finish;
      }
    });
    localStorage['schedulingVisits'] = JSON.stringify(schedulingVisits);
    }
  }

