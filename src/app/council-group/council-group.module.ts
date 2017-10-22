import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreateCouncilGroupComponent } from '../council-group/create/create-council-group.component';
import { CouncilGroupService } from '../services/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    CreateCouncilGroupComponent
  ],
  providers: [
    CouncilGroupService
  ]
})
export class CouncilGroupModule { }

