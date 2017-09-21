import { SchedulingvisitComponent } from './schedulingvisits/schedulingvisit/schedulingvisit.component';
import { SchedulingvisitsComponent } from './schedulingvisits/schedulingvisits.component';
import { Routes } from '@angular/router';
import { SchedulingMeetingComponent } from './scheduling/scheduling-meeting/scheduling-meeting.component';
import { SchedulingHomeComponent } from './scheduling/scheduling-home/scheduling-home.component';
import { HomeComponent } from './layouts/home/home.component';
import { SignupComponent } from './layouts/signup/signup.component';
import { CounselorComponent } from './counselor/counselor.component';
import { SigninComponent } from './layouts/home/signin/signin.component';
import {ChecklistoneComponent} from './checklist/checklistone/checklistone.component';
import {ChecklisttwoComponent} from './checklist/checklisttwo/checklisttwo.component';
import {ChecklistthreeComponent} from './checklist/checklistthree/checklistthree.component';
import {ChecklistComponent} from './checklist/checklist.component';
export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar', component: SignupComponent },
  { path: 'conselheiro', component: CounselorComponent },
  { path: 'agendamento/reuniao', component: SchedulingMeetingComponent },
  { path: 'agendamento', component: SchedulingHomeComponent },
  { path: 'checklist',component: ChecklistComponent },
  { path: 'checklist/1', component: ChecklistoneComponent},
  { path: 'checklist/2', component: ChecklisttwoComponent},
  { path: 'checklist/3', component: ChecklistthreeComponent},
  { path: 'entrar', component: SigninComponent },
  { path: 'agendamento/visita', component: SchedulingvisitsComponent}
];
// import { SchedulingvisitComponent } from './schedulingvisits/schedulingvisit/schedulingvisit.component';
// import { SchedulingvisitsComponent } from './schedulingvisits/schedulingvisits.component';
// import { Routes } from '@angular/router';
// import { SchedulingMeetingComponent } from './scheduling/scheduling-meeting/scheduling-meeting.component';
// import { SchedulingHomeComponent } from './scheduling/scheduling-home/scheduling-home.component';
// import { HomeComponent } from './layouts/home/home.component';
// import { SignupComponent } from './layouts/signup/signup.component';
// import { CounselorComponent } from './counselor/counselor.component';
// import { SigninComponent } from './layouts/home/signin/signin.component';
//
// export const ROUTES: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: '/home', component: HomeComponent },
//   { path: '/cadastrar', component: SignupComponent },
//   { path: '/conselheiro', component: CounselorComponent },
//   { path: '/agendamento/reuniao', component: SchedulingMeetingComponent },
//   { path: '/agendamento', component: SchedulingHomeComponent },
//   { path: '/entrar', component: SigninComponent },
//   { path: '/agendamento/visita', component: SchedulingvisitsComponent}
// ];
// PARA CRIAR SUA ROTA BASTA FAZER O Q FOI FEITO ACIMA
// path: e nome da sua rota exemplo localhost:4200/agendamento
// component: 'e o q vai aparecer la
// <router-outlet></router-outlet> <--- isso aqui faz o resto pra vc no HTML principal
