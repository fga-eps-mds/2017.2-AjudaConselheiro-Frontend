import { Component, OnInit } from '@angular/core';
import { FormsMenu, FormMenuTwo, FormCheckAnswer, FormCheck} from '../../models/index';
import { ChecklistMenuService } from '../../services/index';
import { ConfirmComentary} from '../checklist.model';

@Component({
  selector: 'app-checklistmenu',
  templateUrl:  './checklist-menu.component.html',
  styleUrls: ['./checklist-menu.component.css']
})
export class ChecklistMenuComponent implements OnInit {

  formsMenu: Array<FormCheckAnswer>;
  formMenuTwo: Array<FormCheck>;
  textArea = false;

  checkComentary: ConfirmComentary[]= [
    new ConfirmComentary(false, 'Comment1'),
    new ConfirmComentary(false, 'Comment2'),
    new ConfirmComentary(false, 'Comment3'),
    new ConfirmComentary(false, 'Comment4'),
    new ConfirmComentary(false, 'Comment5'),
    new ConfirmComentary(false, 'Comment6'),
    new ConfirmComentary(false, 'Comment7'),
    new ConfirmComentary(false, 'Comment8'),
  ];

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

  onSubmit(): void {
    console.log(this.formMenuTwo);
    console.log(this.formsMenu);
  }

}
