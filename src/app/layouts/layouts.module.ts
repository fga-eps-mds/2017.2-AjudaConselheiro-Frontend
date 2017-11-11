import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AlertService } from '../services/index';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

export {
  AlertComponent,
  FooterComponent,
  NavbarComponent,
  CarouselComponent,
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule.forRoot(),
    ConfirmationPopoverModule.forRoot()
  ],
  declarations: [
    AlertComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent
  ],
  exports: [
    AlertComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AlertService
  ]
})
export class LayoutsModule { }
