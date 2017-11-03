import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CouncilGroupCreateComponent } from '../council-group/create/create-council-group.component';
import { CouncilGroupCreateService } from '../services/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    CouncilGroupCreateComponent
  ],
  providers: [
    CouncilGroupCreateService
  ]
})
export class CouncilGroupCreateModule { }

