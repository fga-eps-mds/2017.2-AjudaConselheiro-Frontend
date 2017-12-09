import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import {
  CouncilGroupCreateComponent,
  CouncilGroupSearchComponent,
  CouncilGroupComponent,
  CouncilGroupDeleteComponent } from './council-group/council-group.module';

import {
  ChecklistComponent,
  ChecklistProductionComponent,
  ChecklistUpdateComponent
} from './checklist/checklist.module';

import {
  SchedulingHomeComponent,
  SchedulingCreateComponent,
  SchedulingCreateAbstract,
  SchedulingEditComponent,
  SchoolVisitComponent
} from './scheduling/scheduling.module';

import {
  UserCreateComponent,
  UserEditComponent,
  UserListComponent,
  NotProfileComponent,
  LoginComponent,
  ProfileComponent,
  RecoverPasswordComponent,
  PasswordUpdateComponent
} from './user/user.module';
import { AdminComponent } from './admin/admin.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'checklist/producao', component: ChecklistProductionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agendamento', component: SchedulingHomeComponent },
  { path: 'agendamento/criar', component: SchedulingCreateComponent },
  { path: 'agendamento/criar/visita-escolar', component: SchoolVisitComponent },
  { path: 'agendamento/editar/:id', component: SchedulingEditComponent },
  { path: 'usuarios', component: UserListComponent },
  { path: 'usuarios/todos', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: UserCreateComponent },
  { path: 'usuarios/editar/:id', component: UserEditComponent },
  { path: 'conselho', component: CouncilGroupComponent },
  { path: 'conselho/deletar', component: CouncilGroupDeleteComponent },
  { path: 'usuarios/editar/:id/senha', component: PasswordUpdateComponent},
  { path: 'conselho/cadastrar', component: CouncilGroupCreateComponent },
  { path: 'conselho/buscar', component: CouncilGroupSearchComponent},
  { path: 'checklist/update', component: ChecklistUpdateComponent},
  { path: 'usuario-sem-perfil', component: NotProfileComponent},
  { path: 'perfil', component: ProfileComponent},
  { path: 'recuperar-senha', component: RecoverPasswordComponent},
  { path: 'admin', component: AdminComponent}
];
