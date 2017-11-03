import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChecklistProductionComponent } from './checklist-production/checklist-production.component';
import { ChecklistCafeteriaComponent } from './checklist-cafeteria/checklist-cafeteria.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent} from './checklist.component';
import { ChecklistMenuComponent } from './checklist-menu/checklist-menu.component';
import { ChecklistService} from '../services/index';
import { FormsModule, FormGroup, Validators } from '@angular/forms';

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
        ChecklistCafeteriaComponent,
        ChecklistProductionComponent
    ],
    exports: [
        ChecklistComponent,
        ChecklistMenuComponent,
        ChecklistCafeteriaComponent,
    ],
    providers: [
        // ChecklistService,
    ]
})

export class ChecklistModule {}
