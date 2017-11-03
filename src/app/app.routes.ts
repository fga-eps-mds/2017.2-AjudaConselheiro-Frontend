import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SchedulingEditComponent } from './scheduling/edit/scheduling-edit.component';
import { SchedulingCreateComponent } from './scheduling/create/scheduling-create.component';
import { Routes } from '@angular/router';
import { ChecklistMenuComponent } from './checklist/checklist-menu/checklist-menu.component';
import { HomeComponent } from './home/home.component';
import { ChecklistProductionComponent } from './checklist/checklist-production/checklist-production.component';
import { ChecklistCafeteriaComponent } from './checklist/checklist-cafeteria/checklist-cafeteria.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SchedulingHomeComponent } from './scheduling/home/scheduling-home.component';
import { UserListComponent } from './user/list/user-list.component';
import { UserCreateComponent } from './user/create/user-create.component';
import { UserEditComponent } from './user/edit/user-edit.component';
import { LoginComponent } from './user';
import { CouncilGroupCreateComponent } from './council-group/create/council-group-create.component';
import { CouncilGroupSearchComponent } from './council-group/search/search-council-group.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'checklist/1', component: ChecklistProductionComponent},
  { path: 'checklist/menu', component: ChecklistMenuComponent},
  { path: 'checklist/cantina', component: ChecklistCafeteriaComponent},
  { path: 'login', component: LoginComponent },
  { path: 'agendamento', component: SchedulingHomeComponent },
  { path: 'agendamento/criar', component: SchedulingCreateComponent},
  { path: 'agendamento/editar/:id', component: SchedulingEditComponent },
  { path: 'usuarios', component: UserListComponent},
  { path: 'usuarios/todos', component: UserListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: UserCreateComponent },
  { path: 'usuarios/editar/:id', component: UserEditComponent },
  { path: 'conselho/cadastrar', component: CouncilGroupCreateComponent },
  { path: 'conselho/buscar', component: CouncilGroupSearchComponent},
  { path: 'side', component: SidebarComponent },
];
