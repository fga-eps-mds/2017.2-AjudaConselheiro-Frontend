import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CreateUserComponent } from '../user/create/create-user.component';
import { UserListComponent } from './list/index';
import { UserService, AlertService, AuthenticationService } from '../services/index';
import { UserEditComponent } from './edit/index';
import { TextMaskModule } from 'angular2-text-mask';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [
    UserListComponent,
    CreateUserComponent,
    UserEditComponent,
    ProfileComponent,
  ],
  providers: [
    UserService, AlertService, AuthenticationService
  ]
})
export class UserModule { }

