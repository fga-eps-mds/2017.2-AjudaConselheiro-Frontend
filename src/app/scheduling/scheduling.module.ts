import { CreateSchedulingComponent } from './create/create-scheduling.component';

import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingService } from './../services/scheduling.service';
import { SchedulingHomeComponent } from './scheduling-home/scheduling-home.component';
import { EditComponent } from './edit/edit.component';
import { SchoolService } from '../services/index';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    SchedulingHomeComponent,
    EditComponent,
    CreateSchedulingComponent
  ],
  providers: [
    SchedulingService,
    SchoolService
  ]
})
export class SchedulingModule { }
