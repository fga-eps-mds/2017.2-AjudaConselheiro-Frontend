import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TextMaskModule } from 'angular2-text-mask';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TextMaskModule,
    HttpModule
  ],
  declarations: [],
  providers: []
})
export class UserModule { }
