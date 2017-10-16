import { IteratorArray } from '../../models/checklistForms';
import { Component, OnInit } from '@angular/core';
import { FormsMenu, FormMenuTwo, CommentBinaryForm, CommentForm, BinaryForm, FormBinary, ConfirmComentary} from '../../models/index';

@Component({
  selector: 'app-checklistone',
  templateUrl: './checklistone.component.html',
  styleUrls: ['./checklistone.component.css']
})
export class ChecklistoneComponent implements OnInit {
  // This component is destined to the checklist corresponding to
  // LISTA PARA VERIFICAÇÃO DAS BOAS PRÁTICAS DE FABRICAÇÃO
    iteratorArray= IteratorArray;

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



  constructor() { }

  ngOnInit() {
  }

}
