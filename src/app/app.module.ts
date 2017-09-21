import { CounselorService } from './counselor/counselor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CounselorComponent } from './counselor/counselor.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './layouts/home/home.component';
import { NavbarHomeComponent } from './layouts/home/navbar-home/navbar-home.component';
import { SignupComponent } from './layouts/signup/signup.component';
import { FormSignupComponent } from './layouts/signup/form-signup/form-signup.component';
import { CarouselComponent } from './layouts/home/carousel/carousel.component';
import { ChecklistoneComponent } from './checklist/checklistone/checklistone.component';
import { ChecklisttwoComponent } from './checklist/checklisttwo/checklisttwo.component';
import { ChecklistthreeComponent } from './checklist/checklistthree/checklistthree.component';
import { ChecklistModule } from './checklist/checklist.module';
import { ROUTES } from './app.routes';
import { SigninComponent } from './layouts/home/signin/signin.component';
import { FormSigninComponent } from './layouts/home/signin/form-signin/form-signin.component';
import { SchedulingvisitComponent } from './schedulingvisits/schedulingvisit/schedulingvisit.component';
import { SchedulingHomeComponent } from './scheduling/scheduling-home/scheduling-home.component';
import { SchedulingvisitsComponent } from './schedulingvisits/schedulingvisits.component';
import { SchedulingMeetingModule } from './scheduling/scheduling-meeting/scheduling-meeting.module';
import { SchedulingMeetingComponent } from './scheduling/scheduling-meeting/scheduling-meeting.component';
@NgModule({
  declarations: [
    AppComponent,
    CounselorComponent,
    LayoutsComponent,
    HomeComponent,
    NavbarHomeComponent,
    SignupComponent,
    FormSignupComponent,
    CarouselComponent,
    ChecklistoneComponent,
    ChecklisttwoComponent,
    ChecklistthreeComponent,
    SchedulingHomeComponent,
    SigninComponent,
    FormSigninComponent,
    SchedulingvisitsComponent,
    SchedulingvisitComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ChecklistModule,
    SchedulingMeetingModule
    // RouterModule.forRoot(appRoutes),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CounselorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
