import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserCreateComponent } from '../user/create/user-create.component';
import { UserListComponent } from './list/user-list.component';
import { LoginComponent } from './login/login.component';
import { UserService, AlertService, AuthenticationService } from '../services/index';
import { UserEditComponent } from './edit/user-edit.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ProfileComponent } from './profile/profile.component';
import { NotProfileComponent } from './not-profile/not-profile.component';

export { UserCreateComponent, UserEditComponent, UserListComponent, LoginComponent, ProfileComponent, NotProfileComponent };

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    LoginComponent,
    ProfileComponent,
    NotProfileComponent,
  ],
  providers: [
    UserService, AlertService, AuthenticationService
  ]
})
export class UserModule { }
