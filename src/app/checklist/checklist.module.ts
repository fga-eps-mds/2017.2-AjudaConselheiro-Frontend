import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent} from './checklist.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        ChecklistComponent
    ],
    exports: [
        ChecklistComponent
    ]
})

export class ChecklistModule{}
