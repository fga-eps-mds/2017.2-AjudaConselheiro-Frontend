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
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // Reset status login
    this.authenticationService.logout();

    // Get return url from  route  parameters of default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    if (!this.email.match(this.emailRegex)) {
      this.alertService.warn('Email invalido');
    }
    if (this.email) {
      this.authenticationService.login(this.email, this.password)
        .subscribe(
        result => {
          this.token = result;
          localStorage.setItem('token', this.token);
          this.alertService.success('Login efetuado sucesso!');
        },
        error => {
          console.log('error: ', error);
          if (error.status === 401) {
            this.alertService.warn('Erro: email e/ou senha errados!');
          } else if (error.status > 401) {
            this.alertService.error('Erro: falha na comunicação!');
          }
      });
    }
  }
}
