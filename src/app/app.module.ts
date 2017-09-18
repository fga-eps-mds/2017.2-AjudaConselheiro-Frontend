
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingModule } from './scheduling/scheduling.module';
import { Routes, RouterModule } from '@angular/router';

import { SchedulingVisitComponent } from './scheduling-visit/scheduling-visit.component';

import { SchedulingVisitModule } from './scheduling-visit/scheduling-visit.module';


const appRoutes: Routes = [
  {path: 'agendamento', component: SchedulingComponent},
  {path: 'agendamento/visita', component: SchedulingVisitComponent},
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    SchedulingModule,
    SchedulingVisitModule,
    RouterModule.forRoot(appRoutes),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }