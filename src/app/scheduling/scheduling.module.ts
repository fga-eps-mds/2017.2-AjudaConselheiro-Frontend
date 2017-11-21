import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingService } from './../services/scheduling/scheduling.service';
import { SchedulingHomeComponent } from './home/scheduling-home.component';
import { SchedulingEditComponent } from './edit/scheduling-edit.component';
import { SchedulingCreateAbstract } from './scheduling-create-abstract.component';
import { SchedulingCreateComponent } from './create/scheduling-create.component';
import { SchoolService } from '../services/index';
import { AlertService } from '../services/index';
import { SchoolVisitComponent } from './school-visit/school-visit.component';
import { Scheduling } from './../models/scheduling.model';

export { SchedulingCreateComponent, SchedulingEditComponent,
  SchedulingHomeComponent, SchoolVisitComponent, SchedulingCreateAbstract };

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    SchedulingHomeComponent,
    SchedulingEditComponent,
    SchedulingCreateComponent,
    SchoolVisitComponent
  ],
  providers: [
    SchedulingService,
    SchoolService,
    AlertService,
    Scheduling
  ]
})
export class SchedulingModule { }
