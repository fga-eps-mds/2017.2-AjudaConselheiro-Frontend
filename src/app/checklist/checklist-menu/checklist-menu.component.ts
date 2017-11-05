import { Component, OnInit } from '@angular/core';

import { ChecklistMenuIteratorArray } from '../../models/checklist/checklistForms';
import { FormMenuCommentBinary, FormMenuComment, CommentBinaryForm, CommentForm,
  BinaryForm, FormMenuBinary, ConfirmComentary} from '../../models/index';
import { ChecklistService } from '../../services/index';

@Component({
  selector: 'app-checklistmenu',
  templateUrl:  './checklist-menu.component.html',
  styleUrls: ['./checklist-menu.component.css'],
  providers: [ChecklistService],
})
export class ChecklistMenuComponent implements OnInit {

  formMenuCommentBinary: Array<CommentBinaryForm> = FormMenuCommentBinary;
  formMenuComment: Array<CommentForm> = FormMenuComment;
  formMenuBinary: Array<BinaryForm> = FormMenuBinary;
  iteratorArray: Array<Object> = ChecklistMenuIteratorArray;

  checkComentary: ConfirmComentary[]= [
    new ConfirmComentary(false, 'Comment1'),
    new ConfirmComentary(false, 'Comment2'),
    new ConfirmComentary(null, 'Comment3'),
    new ConfirmComentary(null, 'Comment4'),
    new ConfirmComentary(null, 'Comment5'),
  ];

  constructor(private menuService: ChecklistService) {}

  ngOnInit(): void {
    console.warn(this.iteratorArray);
  }

  onSubmit(): void {
    console.warn(this.formMenuCommentBinary);
    console.warn(this.formMenuBinary);
    console.warn(this.formMenuComment);
    console.warn(this.iteratorArray);
  }

}
