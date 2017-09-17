import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingComponent } from './scheduling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [SchedulingComponent],
  exports: [
    SchedulingComponent
  ]
})
export class SchedulingModule { }
