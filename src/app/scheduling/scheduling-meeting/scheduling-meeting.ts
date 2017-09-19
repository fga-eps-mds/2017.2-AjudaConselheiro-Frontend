export class SchedulingMeeting {

    scheduling:any;
    local:string;
    members:string;
    date: number;
    time: number;

    constructor(
      scheduling:any,
      local:string,
      members:string,
      date: number,
      time: number
    ){
      this.date = scheduling;
      this.local = local;
      this.members = members;
      this.scheduling = scheduling;
      this.time = time;
    }
}
