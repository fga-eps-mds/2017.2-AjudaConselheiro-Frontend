import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CouncilGroupCreateComponent } from '../council-group/create/council-group-create.component';
import { CouncilGroupSearchComponent } from '../council-group/search/council-group-search.component';
import { CouncilGroupService } from '../services/index';
import { IbgeComponent } from '../ibge/ibge.component';

export { CouncilGroupCreateComponent, CouncilGroupSearchComponent, IbgeComponent };

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    CouncilGroupCreateComponent,
    CouncilGroupSearchComponent,
    IbgeComponent
  ],
  providers: [
    CouncilGroupService
  ]
})
export class CouncilGroupModule { }

