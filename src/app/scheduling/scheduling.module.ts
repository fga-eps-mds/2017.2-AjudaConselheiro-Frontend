import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingVisitService } from './../services/scheduling-visit.service';
import { SchedulingVisitComponent } from './scheduling-visit';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    SchedulingVisitComponent],
  providers: [
    SchedulingVisitService
  ]
})
export class SchedulingModule { }
