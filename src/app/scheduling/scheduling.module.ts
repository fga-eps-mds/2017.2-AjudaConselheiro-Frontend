import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingService } from './../services/scheduling.service';
import { SchedulingHomeComponent } from './home/scheduling-home.component';
import { SchedulingEditComponent } from './edit/scheduling-edit.component';
import { SchedulingCreateComponent } from './create/scheduling-create.component';
import { SchoolService } from '../services/index';

export { SchedulingCreateComponent, SchedulingEditComponent, SchedulingHomeComponent };

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    SchedulingHomeComponent,
    SchedulingEditComponent,
    SchedulingCreateComponent
  ],
  providers: [
    SchedulingService,
    SchoolService
  ]
})
export class SchedulingModule { }
