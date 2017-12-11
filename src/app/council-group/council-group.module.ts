import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CouncilGroupComponent } from './council-group.component';
import { CouncilGroupCreateComponent } from '../council-group/create/council-group-create.component';
import { CouncilGroupSearchComponent } from '../council-group/search/council-group-search.component';
import { CouncilGroupService, NotificationService } from '../services/index';
import { IbgeComponent } from '../ibge/ibge.component';
import { CouncilGroupDeleteComponent } from './delete/delete.component';

export { CouncilGroupCreateComponent, CouncilGroupSearchComponent, IbgeComponent, CouncilGroupComponent, CouncilGroupDeleteComponent };

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    CouncilGroupCreateComponent,
    CouncilGroupSearchComponent,
    IbgeComponent,
    CouncilGroupComponent,
    CouncilGroupDeleteComponent,
  ],
  providers: [
    CouncilGroupService,
    NotificationService
  ]
})
export class CouncilGroupModule { }

