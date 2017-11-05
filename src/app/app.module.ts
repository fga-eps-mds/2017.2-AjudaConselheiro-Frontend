import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TextMaskModule } from 'angular2-text-mask';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { ChecklistModule } from './checklist/checklist.module';
import { CouncilGroupModule } from './council-group/council-group.module';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ChecklistModule,
    SchedulingModule,
    UserModule,
    CouncilGroupModule,
    TextMaskModule,
    ReactiveFormsModule,
    TextMaskModule,
    LayoutsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    BaseRequestOptions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
