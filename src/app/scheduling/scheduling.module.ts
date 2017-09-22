import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingVisitService } from './../services/scheduling-visit.service';
import { SchedulingVisitComponent } from './scheduling-visit';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SchedulingVisitComponent],
  providers: [
    SchedulingVisitService
  ]
})
export class SchedulingModule { }
