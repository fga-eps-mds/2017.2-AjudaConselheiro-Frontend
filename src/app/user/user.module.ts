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
import { UserCpfComponent } from './cpf/cpf.component';
import { NotProfileComponent } from './not-profile/not-profile.component';
import { ProfileComponent } from './profile/profile.component';
import {RecoverPasswordComponent } from './recover-password/recover-password.component';

export { UserCreateComponent, UserEditComponent, UserListComponent, LoginComponent,
         UserCpfComponent, NotProfileComponent, ProfileComponent, RecoverPasswordComponent };

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
    UserCpfComponent,
    NotProfileComponent,
    ProfileComponent
  ],
  providers: [
    UserService,
    AlertService,
    AuthenticationService,
    ProfileService
  ]
})
export class UserModule { }
