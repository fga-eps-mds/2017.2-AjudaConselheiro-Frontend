import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserCreateComponent } from '../user/create/user-create.component';
import { UserListComponent } from './list/user-list.component';
import { LoginComponent } from './login/login.component';
import { UserService, AlertService, AuthenticationService, ProfileService } from '../services/index';
import { UserEditComponent } from './edit/user-edit.component';
import { TextMaskModule } from 'angular2-text-mask';
import { NotProfileComponent } from './not-profile/not-profile.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';

export {
  UserCreateComponent,
  UserEditComponent,
  UserListComponent,
  LoginComponent,
  NotProfileComponent,
  RecoverPasswordComponent,
  PasswordUpdateComponent
};

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
    NotProfileComponent,
    PasswordUpdateComponent
  ],
  providers: [
    UserService,
    AlertService,
    AuthenticationService,
    ProfileService
  ]
})
export class UserModule { }
