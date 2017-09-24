import { Routes } from '@angular/router';
import { ChecklistMenuComponent } from './checklist/checklistMenu/checklist-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './sign-in/signin.component';
import { ChecklistoneComponent } from './checklist/checklistone/checklistone.component';
import { ChecklistthreeComponent } from './checklist/checklistthree/checklistthree.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SchedulingVisitComponent } from './scheduling/scheduling-visit/scheduling-visit.component';
import { SchedulingHomeComponent } from './scheduling/scheduling-home/scheduling-home.component';
import { SchedulingMeetingComponent } from './scheduling/scheduling-meeting/scheduling-meeting.component';
import { UserListComponent } from './user';
import { CreateUserComponent } from './user';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'agendamento/reuniao', component: SchedulingMeetingComponent },
  { path: 'agendamento', component: SchedulingHomeComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'checklist/1', component: ChecklistoneComponent},
  { path: 'checklist/menu', component: ChecklistMenuComponent},
  { path: 'checklist/3', component: ChecklistthreeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'scheduling/visit', component: SchedulingVisitComponent},
  { path: 'schedulinghome', component: SchedulingHomeComponent},
  { path: 'schedulingmeeting', component: SchedulingMeetingComponent},
  { path: 'users', component: UserListComponent},
  { path: 'users/list', component: UserListComponent},
  { path: 'register', component: CreateUserComponent },
];
