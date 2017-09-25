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
import { LayoutsComponent } from './layouts/layouts.component';
import { SchedulingVisitComponent } from './scheduling/scheduling-visit/scheduling-visit.component';
import { HomeComponent } from './home/home.component';
import { NavbarHomeComponent } from './layouts/navbar/navbar.component';
import { CarouselComponent } from './layouts/carousel/carousel.component';
import { ChecklistoneComponent } from './checklist/checklistone/checklistone.component';
import { ChecklistMenuComponent } from './checklist/checklistMenu/checklist-menu.component';
import { ChecklistthreeComponent } from './checklist/checklistthree/checklistthree.component';
import { LoginComponent } from './sign-in/signin.component';
import { FormSigninComponent } from './sign-in/form-signin/form-signin.component';


import { ROUTES } from './app.routes';
import { BaseRequestOptions } from '@angular/http';

import { ChecklistMenuService } from './services/checklist-menu.service';

@NgModule({

  declarations: [
    AppComponent,
    LayoutsComponent,
    HomeComponent,
    NavbarHomeComponent,
    CarouselComponent,
    ChecklistoneComponent,
    ChecklistthreeComponent,
    FormSigninComponent,
    LoginComponent,
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
    // RouterModule.forRoot(appRoutes),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    ChecklistMenuService,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
