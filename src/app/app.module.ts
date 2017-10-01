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
import { HomeComponent } from './home/home.component';
import { NavbarHomeComponent } from './layouts/navbar/navbar.component';
import { CarouselComponent } from './layouts/carousel/carousel.component';
import { ChecklistoneComponent } from './checklist/checklistone/checklistone.component';
import { ChecklistMenuComponent } from './checklist/checklistMenu/checklist-menu.component';
import { ChecklistthreeComponent } from './checklist/checklistthree/checklistthree.component';
import { LoginComponent } from './user';
import { TextMaskModule } from 'angular2-text-mask';
import { ROUTES } from './app.routes';
import { BaseRequestOptions } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
@NgModule({

  declarations: [
    AppComponent,
    LayoutsComponent,
    HomeComponent,
    NavbarHomeComponent,
    CarouselComponent,
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
    TextMaskModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    BaseRequestOptions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
