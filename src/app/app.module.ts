
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingModule } from './scheduling/scheduling.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    SchedulingModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
