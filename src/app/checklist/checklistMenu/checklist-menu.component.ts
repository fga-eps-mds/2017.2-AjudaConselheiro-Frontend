import { Component, OnInit } from '@angular/core';
import { FormsMenu, FormMenuTwo, FormCheckAnswer, FormCheck} from '../../models/index';
import { ChecklistMenuService } from '../../services/index';

@Component({
  selector: 'app-checklistMenu',
  templateUrl:  './checklist-menu.component.html',
  styleUrls: ['./checklist-menu.component.css']
})
export class ChecklistMenuComponent implements OnInit {

  formsMenu: Array<FormCheckAnswer>;
  formMenuTwo: Array<FormCheck>;

  constructor(private menuService: ChecklistMenuService) {}

  ngOnInit(): void {
    this.menuService.getFormsMenu()
      .then((formsMenu: FormCheckAnswer[]) => {
          this.formsMenu = formsMenu;
      }).catch(err => console.log(err));

    this.menuService.getFormsMenuTwo()
      .then((formsMenuTwo: FormCheck[]) => {
          this.formMenuTwo = formsMenuTwo;
      }).catch(err => console.log(err));
  }
}
