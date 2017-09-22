import { SchedulingModule } from './scheduling/scheduling.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LayoutsComponent } from './layouts/layouts.component';

import { HomeComponent } from './home/home.component';
import { NavbarHomeComponent } from './layouts/navbar/navbar.component';
import { RegisterComponent } from './sign-up/signup.component';
import { FormSignupComponent } from './sign-up/form-signup/form-signup.component';
import { CarouselComponent } from './layouts/carousel/carousel.component';

import { ChecklistoneComponent } from './checklist/checklistone/checklistone.component';
import { ChecklisttwoComponent } from './checklist/checklisttwo/checklisttwo.component';
import { ChecklistthreeComponent } from './checklist/checklistthree/checklistthree.component';
import { ChecklistModule } from './checklist/checklist.module';
import { ROUTES } from './app.routes';

import { SchedulingComponent } from './scheduling/scheduling.component';
import { AlertService } from './services/alert.service';
import { AlertComponent } from './directives/alert.component';
import { AuthenticationService } from './services/userauthentication.service';
import { UserService } from './services/user.service';
import { LoginComponent } from './sign-in/signin.component';
import { FormSigninComponent } from './sign-in/form-signin/form-signin.component';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LayoutsComponent,
    HomeComponent,
    NavbarHomeComponent,
    RegisterComponent,
    FormSignupComponent,
    CarouselComponent,
    ChecklistoneComponent,
    ChecklisttwoComponent,
    ChecklistthreeComponent,
    SchedulingComponent,
    FormSigninComponent,
    LoginComponent,
    AlertComponent,

  ],

  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ChecklistModule,
    SchedulingModule
    // RouterModule.forRoot(appRoutes),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,

    // providers used to create fake backend

    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
