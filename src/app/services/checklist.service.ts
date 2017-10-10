import {SaveFormCheckTwo} from '../models/checklist.model';
import {Subject} from 'rxjs/Subject';

export class SaveNewFormTwoService {
  newChecklist = new Subject<SaveFormCheckTwo[]>();
  private answersTwo: SaveFormCheckTwo[] = [

  ];
  getChecklist() {
    this.answersTwo.slice();
  }


}
