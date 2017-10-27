import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { User } from '../../models/index';
import { UserService, AuthenticationService, AlertService } from '../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService, AuthenticationService ],
  moduleId: module.id
})

export class LoginComponent implements OnInit {

  user: User;
  token: any = null;
  emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  email: string;
  password: string;

  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // Reset status login
    this.authenticationService.logout();
  }

  login() {
    const validEmail = this.emailRegex.test(this.email);

    if (validEmail) {
      this.authenticationService.login(this.email, this.password)
      .subscribe(
        result => {
          localStorage.setItem('token', result[0]);
          localStorage.setItem('userData', result[1]._body);

          this.alertService.success('Login efetuado sucesso!');
        },
        error => {
          console.log('error: ', error.status);
          if (error.status === 401) {
            this.alertService.warn('Erro: email e/ou senha errados!');
          } else if (error.status > 401) {
            this.alertService.error('Erro: falha na comunicação!');
          }
      });
    } else {
      this.alertService.warn('Email invalido');
    }
  }
}
