import { Component, OnInit } from '@angular/core';
import { FormsMenu, FormMenuTwo, CommentBinaryForm, CommentForm, BinaryForm, FormBinary, ConfirmComentary} from '../../models/index';
import { ChecklistMenuService } from '../../services/index';

@Component({
  selector: 'app-checklistmenu',
  templateUrl:  './checklist-menu.component.html',
  styleUrls: ['./checklist-menu.component.css']
})
export class ChecklistMenuComponent implements OnInit {

  formsMenu: Array<CommentBinaryForm> = FormsMenu ;
  formMenuTwo: Array<CommentForm> = FormMenuTwo;
  formBinary: Array<BinaryForm> = FormBinary ;
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
      .then((formsMenu: CommentBinaryForm[]) => {
          this.formsMenu = formsMenu;
      }).catch(err => console.log(err));

    this.menuService.getFormsMenuTwo()
      .then((formsMenuTwo: CommentForm[]) => {
          this.formMenuTwo = formsMenuTwo;
      }).catch(err => console.log(err));

   this.menuService.getBinaryFormCardapio()
     .then((formBinary: BinaryForm[]) => {
         this.formBinary = formBinary;
     }).catch(err => console.log(err));
}

  onSubmit(): void {
    console.log(this.formMenuTwo);
    console.log(this.formsMenu);
    console.log(this.formBinary);
  }

}
