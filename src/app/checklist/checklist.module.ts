import { ChecklistoneComponent } from './checklistone/checklistone.component';
import { ChecklistthreeComponent } from './checklistthree/checklistthree.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent} from './checklist.component';
import { ChecklistMenuComponent } from './checklistMenu/checklist-menu.component';
import { ChecklistMenuService , ChecklistThreeService, SaveNewFormTwoService } from '../services/index';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule

    ],
    declarations: [
        ChecklistComponent,
        ChecklistMenuComponent,
        ChecklistthreeComponent,
        ChecklistoneComponent,
    ],
    exports: [
        ChecklistComponent,
        ChecklistMenuComponent
    ],
    providers: [
        ChecklistMenuService,
        ChecklistThreeService,
        SaveNewFormTwoService
    ]
})

export class ChecklistModule {}

export class CheckQuestion {
  public pergunta: string;

  constructor(pergunta: string) {
    this.pergunta = pergunta;
  }
}

export class InfoData {
  constructor(public data: number, public responsavelPrenchimento: string,
    public responsavelInfo: string, public cargo: string, public escola: string,
    public cantineiro: string) {}
}
