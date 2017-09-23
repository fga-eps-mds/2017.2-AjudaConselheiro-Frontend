import { Routes } from '@angular/router';

import { SchedulingvisitComponent } from './schedulingvisits/schedulingvisit/schedulingvisit.component';
import { SchedulingvisitsComponent } from './schedulingvisits/schedulingvisits.component';
import { SchedulingMeetingComponent } from './scheduling/scheduling-meeting/scheduling-meeting.component';
import { SchedulingHomeComponent } from './scheduling/scheduling-home/scheduling-home.component';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './sign-up/signup.component';
import { UserComponent } from './user/user/user.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { LoginComponent } from './sign-in/signin.component';

import { ChecklistoneComponent } from './checklist/checklistone/checklistone.component';
import { ChecklisttwoComponent } from './checklist/checklisttwo/checklisttwo.component';
import { ChecklistthreeComponent } from './checklist/checklistthree/checklistthree.component';
import { ChecklistComponent } from './checklist/checklist.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users/list', component: UserComponent },
  { path: 'agendamento/reuniao', component: SchedulingMeetingComponent },
  { path: 'agendamento', component: SchedulingHomeComponent },
  { path: 'users', component: UserHomeComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'checklist/1', component: ChecklistoneComponent},
  { path: 'checklist/2', component: ChecklisttwoComponent},
  { path: 'checklist/3', component: ChecklistthreeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'agendamento/visita', component: SchedulingvisitsComponent}
];

// PARA CRIAR SUA ROTA BASTA FAZER O Q FOI FEITO ACIMA
// path: e nome da sua rota exemplo localhost:4200/agendamento
// component: 'e o q vai aparecer la
// <router-outlet></router-outlet> <--- isso aqui faz o resto pra vc no HTML principal
