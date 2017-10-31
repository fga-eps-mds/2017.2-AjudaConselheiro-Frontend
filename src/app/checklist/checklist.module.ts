import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChecklistoneComponent } from './checklistone/checklistone.component';
import { ChecklistthreeComponent } from './checklistthree/checklistthree.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent} from './checklist.component';
import { ChecklistMenuComponent } from './checklistMenu/checklist-menu.component';
import { ChecklistService} from '../services/index';
import { FormsModule, FormGroup, Validators } from '@angular/forms';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpModule,
    ],
    declarations: [
        ChecklistComponent,
        ChecklistMenuComponent,
        ChecklistthreeComponent,
        ChecklistoneComponent,
        ChecklistListComponent
    ],
    exports: [
        ChecklistComponent,
        ChecklistMenuComponent,
        ChecklistthreeComponent,
    ],
    providers: [
        // ChecklistService,
    ]
})

export class ChecklistModule {}
