import { Injectable } from '@angular/core';

import { ChecklistThree } from '../models/checklistthree.model';

@Injectable()
export class ChecklistThreeService {

  constructor() { }

  listAllCheck(): ChecklistThree[] {
    const checklistThree = localStorage['checklistThree'];
    return checklistThree ? JSON.parse(checklistThree) : [];
  }

  newCheck(checkThree: ChecklistThree): void {
    const checklistThree = this.listAllCheck();
    checkThree.id = new Date().getTime();
    checklistThree.push(checkThree);
    localStorage['checklistThree'] = JSON.stringify(checklistThree);
  }
}
