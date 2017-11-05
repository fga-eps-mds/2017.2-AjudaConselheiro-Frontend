import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, Validators } from '@angular/forms';

import { ChecklistComponent} from './checklist.component';
import { ChecklistProductionComponent } from './checklist-production/checklist-production.component';
import { ChecklistCafeteriaComponent } from './checklist-cafeteria/checklist-cafeteria.component';
import { ChecklistMenuComponent } from './checklist-menu/checklist-menu.component';
import { ChecklistUpdateComponent } from './checklist-update/checklist-update.component';
import { ChecklistService} from '../services/index';

export { ChecklistComponent, ChecklistCafeteriaComponent, ChecklistMenuComponent, ChecklistProductionComponent, ChecklistUpdateComponent };

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
        ChecklistProductionComponent,
        ChecklistUpdateComponent
    ],
    providers: [
        ChecklistService
    ]
})

export class ChecklistModule {}
