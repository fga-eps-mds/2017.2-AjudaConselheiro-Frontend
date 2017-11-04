import { UserModule } from './user/user.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistModule } from './checklist/checklist.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ROUTES } from './app.routes';
import { BaseRequestOptions } from '@angular/http';
import { CouncilGroupCreateModule } from './council-group/council-group.module';
import { AlertService } from './services/alert/alert.service';
import { CouncilGroupSearchComponent } from './council-group/search/council-group-search.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    CouncilGroupSearchComponent,
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
    CouncilGroupCreateModule,
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
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
