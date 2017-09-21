import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { SchedulingMeetingComponent } from './scheduling-meeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingMeetingService } from './scheduling-meeting.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [SchedulingMeetingComponent],
  exports: [
    SchedulingMeetingComponent
  ],
  providers: [SchedulingMeetingService]
})
export class SchedulingMeetingModule { }
