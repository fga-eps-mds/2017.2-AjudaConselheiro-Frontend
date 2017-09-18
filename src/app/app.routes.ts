import { Routes } from '@angular/router';

import { HomeComponent } from './layouts/home/home.component';
import { SignupComponent } from './layouts/signup/signup.component';
import { CounselorComponent } from './counselor/counselor.component';
import { SchedulingVisitComponent } from './scheduling-visit/scheduling-visit.component';
import { SchedulingComponent } from './scheduling/scheduling.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar', component: SignupComponent },
  { path: 'conselheiro', component: CounselorComponent },
  { path: 'agendamento', component: SchedulingComponent },
  { path: 'agendamento/visita', component: SchedulingVisitComponent }
];

// PARA CRIAR SUA ROTA BASTA FAZER O Q FOI FEITO ACIMA
// path: e nome da sua rota exemplo localhost:4200/agendamento
// component: 'e o q vai aparecer la
// <router-outlet></router-outlet> <--- isso aqui faz o resto pra vc no HTML principal
