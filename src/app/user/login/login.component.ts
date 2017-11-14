import { ProfileService } from './../../services/profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { User } from '../../models/index';
import { AuthenticationService, AlertService } from '../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthenticationService],
  moduleId: module.id
})

export class LoginComponent implements OnInit {

  user: User;
  token: any = null;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  email: string;
  password: string;

  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit() {
    // do nothing
  }

  login() {
    const validEmail = this.emailRegex.test(this.email);
    console.log(validEmail);

    if (validEmail) {
      this.authenticationService.login(this.email, this.password)
      .subscribe(
        result => {
          localStorage.setItem('token', result[0]);
          localStorage.setItem('userData', result[1]._body);
          localStorage.setItem('isLoggedIn', 'true');
          this.getProfile();       
          this.alertService.success('Login efetuado sucesso!');
          this.router.navigate(['/perfil']);
        },
        error => {
          console.log('error: ', error.status);
          if (error.status === 401) {
            this.alertService.warn('Aviso: email e/ou senha errados!');
          } else if (error.status > 401) {
            this.alertService.error('Erro: falha na comunicação!');
          }
      });
    } else {
      this.alertService.warn('Email invalido');
    }
  }
  getProfile() {
    return this.profileService.getProfile().subscribe(
           result => localStorage.setItem('Profile',JSON.stringify(result)));
       
    }
}
