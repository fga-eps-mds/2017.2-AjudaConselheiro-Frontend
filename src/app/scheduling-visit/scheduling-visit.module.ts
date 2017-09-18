import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { SchedulingVisitComponent } from './scheduling-visit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule  
  ],
  
  declarations: [SchedulingVisitComponent],
  exports: [
    SchedulingVisitComponent
  ],
  providers: []
})
export class SchedulingVisitModule { }
