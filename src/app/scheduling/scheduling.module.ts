import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingVisitService } from './../services/scheduling-visit.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SchedulingVisitService
  ]
})
export class SchedulingModule { }
