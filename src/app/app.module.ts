import { UserService } from './services/user.service';

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
import { SignupComponent } from './sign-up/signup.component';
import { FormSignupComponent } from './sign-up/form-signup/form-signup.component';
import { CarouselComponent } from './layouts/carousel/carousel.component';

import { ChecklistoneComponent } from './checklist/checklistone/checklistone.component';
import { ChecklisttwoComponent } from './checklist/checklisttwo/checklisttwo.component';
import { ChecklistthreeComponent } from './checklist/checklistthree/checklistthree.component';
import { ChecklistModule } from './checklist/checklist.module';
import { ROUTES } from './app.routes';
import { SigninComponent } from './sign-in/signin.component';
import { FormSigninComponent } from './sign-in/form-signin/form-signin.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LayoutsComponent,
    HomeComponent,
    NavbarHomeComponent,
    SignupComponent,
    FormSignupComponent,
    CarouselComponent,
    ChecklistoneComponent,
    ChecklisttwoComponent,
    ChecklistthreeComponent,
    SigninComponent,
    FormSigninComponent,
    SchedulingComponent

  ],

  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ChecklistModule,
    // RouterModule.forRoot(appRoutes),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
