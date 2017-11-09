import { Routes } from '@angular/router';

import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CouncilGroupCreateComponent, CouncilGroupSearchComponent } from './council-group/council-group.module';

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
  ProfileComponent
} from './user/user.module';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
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
  { path: 'conselho/cadastrar', component: CouncilGroupCreateComponent },
  { path: 'conselho/buscar', component: CouncilGroupSearchComponent},
  { path: 'side', component: SidebarComponent },
  { path: 'checklist/update', component: ChecklistUpdateComponent},
  { path: 'adicionar-cpf', component: UserCpfComponent },
  { path: 'usuario-sem-perfil', component: NotProfileComponent},
  { path: 'perfil', component: ProfileComponent}
];
