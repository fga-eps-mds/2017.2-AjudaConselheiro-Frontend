import { Injectable } from '@angular/core';

import { ChecklistThree } from '../models/checklistthree.model'

@Injectable()
export class ChecklistThreeService {

  constructor() { }

  listAllScheculings():ChecklistThree[]{
    const checklistThree = localStorage['checklistThree'];
    return checklistThree ? JSON.parse(checklistThree):[];
  }

  newScheduling(checkThree:ChecklistThree): void {
    const checklistThree = this.listAllScheculings();
    checkThree.id = new Date().getTime();
    checklistThree.push(checkThree);
    localStorage['checklistThree'] = JSON.stringify(checklistThree);
  }
}
