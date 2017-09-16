import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {path: 'agendamento', component: SchedulingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SchedulingComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
