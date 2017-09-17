import { CounselorService } from './counselor/counselor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounselorComponent } from './counselor/counselor.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './layouts/home/home.component';
import { NavbarHomeComponent } from './layouts/home/navbar-home/navbar-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CounselorComponent,
    LayoutsComponent,
    HomeComponent,
    NavbarHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MDBBootstrapModule.forRoot()    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CounselorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
