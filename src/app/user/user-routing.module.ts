import { Routes } from '@angular/router';
import { UserListComponent } from './list';

export const UserRoutes: Routes = [
  {
    path: 'users',
    redirectTo: 'users/list'
  },
  {
    path: 'users/list',
    component: UserListComponent
  },
];
