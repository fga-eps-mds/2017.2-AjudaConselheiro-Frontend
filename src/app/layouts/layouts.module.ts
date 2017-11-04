import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarHomeComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AlertService } from '../services/index';
import { CarouselModule } from 'ngx-bootstrap/carousel';

export {
  AlertComponent,
  FooterComponent,
  NavbarHomeComponent,
  SidebarComponent,
  CarouselComponent,
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  declarations: [
    AlertComponent,
    FooterComponent,
    NavbarHomeComponent,
    SidebarComponent,
    CarouselComponent
  ],
  exports: [
    AlertComponent,
    FooterComponent,
    NavbarHomeComponent,
    SidebarComponent,
    CarouselComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AlertService
  ]
})
export class LayoutsModule { }
