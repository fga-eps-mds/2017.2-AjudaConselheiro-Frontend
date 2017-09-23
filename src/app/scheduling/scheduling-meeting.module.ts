import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingVisitService } from '../services/scheduling-visit.service';
import { SchedulingVisitComponent } from './scheduling-visit';
import { SchedulingHomeComponent } from './scheduling-home/scheduling-home.component';
import { SchedulingMeetingComponent } from './scheduling-meeting/scheduling-meeting.component';
import { SchedulingMeetingService } from './../services/scheduling-meeting.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SchedulingVisitComponent,
    SchedulingHomeComponent,
    SchedulingMeetingComponent
  ],
  providers: [
    SchedulingVisitService,
    SchedulingMeetingService
  ]
})
export class SchedulingModule { }
