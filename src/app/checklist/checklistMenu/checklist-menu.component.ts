import { Component, OnInit } from '@angular/core';
import { FormsMenu, FormMenuTwo, FormCheckAnswer, FormCheck} from '../../models/index'

@Component({
  selector: 'app-checklistMenu',
  templateUrl: './checklist-menu.component.html',
  styleUrls: ['./checklist-menu.component.css']
})
export class ChecklistMenuComponent implements OnInit {

  formsMenu : Array<FormCheckAnswer> = FormsMenu;
  formMenuTwo: Array<FormCheck> = FormMenuTwo;

  ngOnInit() {
  }

}
