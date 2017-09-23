import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [UserComponent],
  exports: [
    UserComponent
  ],
  providers: [UserService]
})
export class UserModule { }
