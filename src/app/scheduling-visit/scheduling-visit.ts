export class SchedulingVisit {
    
        scheduling:any;
        local:string;
        members:string;
        school: string;
        date: number;
        time: number;
    
        constructor(
          scheduling:any,
          local:string,
          members:string,
          school:string,
          date: number,
          time: number
        ){
          this.date = scheduling;
          this.local = local;
          this.members = members;
          this.school = school;
          this.scheduling = scheduling;
          this.time = time;
        }
    }
    