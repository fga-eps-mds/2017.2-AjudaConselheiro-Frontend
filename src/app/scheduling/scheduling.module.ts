import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingVisitService } from './../services/scheduling-visit.service';
import { SchedulingVisitComponent } from './scheduling-visit';
import { SchedulingHomeComponent } from './scheduling-home/scheduling-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SchedulingVisitComponent,
    SchedulingHomeComponent],
  providers: [
    SchedulingVisitService
  ]
})
export class SchedulingModule { }
