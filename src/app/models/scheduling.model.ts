import { School } from './school.model';
export class Scheduling {
  constructor(
      public id?: number,
      public local?: string,
      public members?: string,
      public date?: number,
      public time?: number,
      public type?: string,
      public school?: School
  ) {}
}
