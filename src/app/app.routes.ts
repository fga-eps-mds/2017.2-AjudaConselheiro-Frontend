import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CouncilGroupCreateComponent, CouncilGroupSearchComponent, CouncilGroupComponent } from './council-group/council-group.module';

import {
  ChecklistComponent,
  ChecklistProductionComponent,
  ChecklistMenuComponent,
  ChecklistCafeteriaComponent,
  ChecklistUpdateComponent
} from './checklist/checklist.module';

import {
  SchedulingHomeComponent,
  SchedulingCreateComponent,
  SchedulingEditComponent
} from './scheduling/scheduling.module';

import {
  UserCreateComponent,
  UserEditComponent,
  UserListComponent,
  UserCpfComponent,
  NotProfileComponent,
  LoginComponent,
  ProfileComponent,
  PasswordUpdateComponent
} from './user/user.module';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'checklist/producao', component: ChecklistProductionComponent },
  { path: 'checklist/menu', component: ChecklistMenuComponent },
  { path: 'checklist/cantina', component: ChecklistCafeteriaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agendamento', component: SchedulingHomeComponent },
  { path: 'agendamento/criar', component: SchedulingCreateComponent },
  { path: 'agendamento/editar/:id', component: SchedulingEditComponent },
  { path: 'usuarios', component: UserListComponent },
  { path: 'usuarios/todos', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: UserCreateComponent },
  { path: 'usuarios/editar/:id', component: UserEditComponent },
  { path: 'conselho', component: CouncilGroupComponent },
  { path: 'usuarios/editar/:id/senha', component: PasswordUpdateComponent},
  { path: 'conselho/cadastrar', component: CouncilGroupCreateComponent },
  { path: 'conselho/buscar', component: CouncilGroupSearchComponent},
  { path: 'checklist/update', component: ChecklistUpdateComponent},
  { path: 'adicionar-cpf', component: UserCpfComponent },
  { path: 'usuario-sem-perfil', component: NotProfileComponent},
  { path: 'perfil', component: ProfileComponent},
];
