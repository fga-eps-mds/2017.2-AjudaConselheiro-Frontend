import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { SchedulingComponent } from './scheduling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingService } from './scheduling.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
    
  ],
  declarations: [SchedulingComponent],
  exports: [
    SchedulingComponent
  ],
  providers: [SchedulingService]
})
export class SchedulingModule { }
