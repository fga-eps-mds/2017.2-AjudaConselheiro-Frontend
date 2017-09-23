export class SchedulingMeeting{
    constructor(
        public id?: number,
        public local?: string,
        public members?: string,
        public date?: number,
        public time?: number
    ){}
}