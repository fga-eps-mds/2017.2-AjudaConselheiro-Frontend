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
import { ChecklistoneComponent } from './checklists/checklistone/checklistone.component';
import { ChecklisttwoComponent } from './checklists/checklisttwo/checklisttwo.component';
import { ChecklistthreeComponent } from './checklists/checklistthree/checklistthree.component';
import { SchedulingHomeComponent } from './scheduling/scheduling-home/scheduling-home.component';
import { SchedulingComponent } from './scheduling/scheduling-meeting/scheduling-meeting.component';
import { SchedulingModule } from './scheduling/scheduling-meeting/scheduling-meeting.module';
import { ChecklistModule } from './checklist/checklist.module';
import { SchedulingVisitComponent } from './scheduling/scheduling-visit/scheduling-visit.component';
import { ROUTES } from './app.routes';
import { SigninComponent } from './layouts/home/signin/signin.component';
import { FormSigninComponent } from './layouts/home/signin/form-signin/form-signin.component';


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
    SchedulingVisitComponent,
    ChecklistoneComponent,
    ChecklisttwoComponent,
    ChecklistthreeComponent,
    SchedulingHomeComponent,
    SigninComponent,
    FormSigninComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    SchedulingModule,
    ChecklistModule,
    // RouterModule.forRoot(appRoutes),
    //Comentei o erro da linha 56, não faço ideia do que ta acontecendo, caso for usar, resolva.
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CounselorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
