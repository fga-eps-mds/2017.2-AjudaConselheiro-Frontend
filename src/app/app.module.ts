import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChecklistoneComponent } from './checklists/checklistone/checklistone.component';
import { ChecklisttwoComponent } from './checklists/checklisttwo/checklisttwo.component';
import { ChecklistthreeComponent } from './checklists/checklistthree/checklistthree.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingModule } from './scheduling/scheduling.module';
import { Routes, RouterModule } from '@angular/router';
import { SchedulingVisitComponent } from './scheduling-visit/scheduling-visit.component';
import { SchedulingVisitModule } from './scheduling-visit/scheduling-visit.module';
import { ROUTES } from './app.routes';

const appRoutes: Routes = [
  {path: 'agendamento', component: SchedulingComponent},
  {path: 'agendamento/visita', component: SchedulingVisitComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    SchedulingVisitComponent,
    ChecklistoneComponent,
    ChecklisttwoComponent,
    ChecklistthreeComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    SchedulingModule,
    SchedulingVisitModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(ROUTES)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
