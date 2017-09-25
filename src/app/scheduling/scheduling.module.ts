
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingService } from './../services/scheduling.service';
import { SchedulingVisitComponent } from './shared';
import { SchedulingHomeComponent } from './scheduling-home/scheduling-home.component';
import { SchedulingMeetingComponent } from './scheduling-meeting/scheduling-meeting.component';
import { SchedulingMeetingService } from './../services/scheduling-meeting.service';
import { EditComponent } from './scheduling-visit/edit/edit.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    SchedulingVisitComponent,
    SchedulingHomeComponent,
    SchedulingMeetingComponent,
    EditComponent
  ],
  providers: [
    SchedulingService,
    SchedulingMeetingService
  ]
})
export class SchedulingModule { }
