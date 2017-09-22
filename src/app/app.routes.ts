import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './sign-up/signup.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './sign-in/signin.component';

import { ChecklistoneComponent } from './checklist/checklistone/checklistone.component';
import { ChecklisttwoComponent } from './checklist/checklisttwo/checklisttwo.component';
import { ChecklistthreeComponent } from './checklist/checklistthree/checklistthree.component';
import { ChecklistComponent } from './checklist/checklist.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'checklist/1', component: ChecklistoneComponent},
  { path: 'checklist/2', component: ChecklisttwoComponent},
  { path: 'checklist/3', component: ChecklistthreeComponent},
  { path: 'login', component: LoginComponent },
];

// PARA CRIAR SUA ROTA BASTA FAZER O Q FOI FEITO ACIMA
// path: e nome da sua rota exemplo localhost:4200/agendamento
// component: 'e o q vai aparecer la
// <router-outlet></router-outlet> <--- isso aqui faz o resto pra vc no HTML principal
