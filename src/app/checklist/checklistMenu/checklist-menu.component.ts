import { Component, OnInit } from '@angular/core';
import { FormsMenu, FormMenuTwo, FormCheckAnswer, FormCheck, BinaryFormCardapio, FormBinary} from '../../models/index';
import { ChecklistMenuService } from '../../services/index';
import { ConfirmComentary} from '../checklist.model';

@Component({
  selector: 'app-checklistmenu',
  templateUrl:  './checklist-menu.component.html',
  styleUrls: ['./checklist-menu.component.css']
})
export class ChecklistMenuComponent implements OnInit {

  formsMenu: Array<FormCheckAnswer> = FormsMenu ;
  formMenuTwo: Array<FormCheck> = FormMenuTwo;
  formBinary: Array<BinaryFormCardapio> = FormBinary ;
  textArea = false;

  checkComentary: ConfirmComentary[]= [
    new ConfirmComentary(false, 'Comment1'),
    new ConfirmComentary(false, 'Comment2'),
    new ConfirmComentary(null, 'Comment3'),
    new ConfirmComentary(null, 'Comment4'),
    new ConfirmComentary(null, 'Comment5'),
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

   this.menuService.getBinaryFormCardapio()
     .then((formBinary: BinaryFormCardapio[]) => {
         this.formBinary = formBinary;
     }).catch(err => console.log(err));
}

  onSubmit(): void {
    console.log(this.formMenuTwo);
    console.log(this.formsMenu);
    console.log(this.formBinary);
  }

}
