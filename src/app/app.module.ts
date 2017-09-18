
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingModule } from './scheduling/scheduling.module';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {path: 'agendamento', component: SchedulingComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    SchedulingModule,
    RouterModule.forRoot(appRoutes)
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
