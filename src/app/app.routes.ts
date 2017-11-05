import { NotProfileComponent } from './user/not-profile/not-profile.component';
import { ProfileComponent } from './user/profile/profile.component';

import { Routes } from '@angular/router';

import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CouncilGroupCreateComponent, CouncilGroupSearchComponent } from './council-group/council-group.module';

import {
  ChecklistComponent,
  ChecklistProductionComponent,
  ChecklistMenuComponent,
  ChecklistCafeteriaComponent
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
  LoginComponent
} from './user/user.module';

import { ChecklistUpdateComponent } from './checklist/checklist-update/checklist-update.component';

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
  { path: 'perfil', component: ProfileComponent },
  { path: 'usuario-sem-perfil', component: NotProfileComponent}
];
