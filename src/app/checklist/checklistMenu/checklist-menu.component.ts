import { Component, OnInit } from '@angular/core';
import { FormsMenu, FormMenuTwo, CommentBinaryForm, CommentForm, BinaryForm, FormBinary, ConfirmComentary} from '../../models/index';
import { ChecklistService } from '../../services/index';

@Component({
  selector: 'app-checklistmenu',
  templateUrl:  './checklist-menu.component.html',
  styleUrls: ['./checklist-menu.component.css'],
  providers: [ChecklistService],
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

  constructor(private menuService: ChecklistService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.formMenuTwo);
    console.log(this.formsMenu);
    console.log(this.formBinary);
  }

}
