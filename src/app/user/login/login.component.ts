import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/index';
import { UserService, AuthenticationService, AlertService } from '../../services/index';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService, AuthenticationService, AlertService ],
  // imports: [],
  moduleId: module.id
})
export class LoginComponent implements OnInit {

  user: User;
  token: any;
  maskcpf: any[] = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  email: string;
  password: string;
  loading = false;
  returnUrl: string;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }

    ngOnInit() {
      // Reset status login
      this.authenticationService.logout();

      // Get return url from  route  parameters of default to '/'
      this.returnUrl  = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
      this.loading = true;
      const emailMatch = this.email
        .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (emailMatch) {
        this.authenticationService.login(this.email, this.password)
        .subscribe(
            result => {
                this.token = result;
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
                if (error = 401) {
                  console.log('Email ou senha inválidos');
                  if (confirm('Email ou senha inválidos')) {}
                }
            });
        if (this.token) {
          localStorage.setItem('token', this.token);
          // this.router.navigate(['usuarios/editar/' + this.user.cod ]);
        }
      } else {
        console.warn('Não fez login');
      }
  }
}
