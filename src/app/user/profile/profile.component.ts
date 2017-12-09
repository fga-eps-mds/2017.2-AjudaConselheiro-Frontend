import { AlertService } from './../../services/alert/alert.service';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { User } from './../../models/user';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User;
  public passwordForm;

  constructor(
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService

  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/home']);
    } else {
      this.user = this.userService.getLoggedUser();
    }
  }

  errorStatus (errorStatus: number) {
    if (errorStatus === 401) {
      this.alertService.warn('Aviso: senha errada!');
    } else {
      this.alertService.error('Erro: Não foi possível deletar!');
    }
  }

  validatePassword() {
    this.authenticationService.loginWithoutProfile(this.user.email, this.passwordForm)
    .subscribe(
      result => this.delete(),
      error => this.errorStatus(error.status));
  }

  resultDelete() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  delete() {
    this.userService.delete(this.user.cod).subscribe(
      result => this.resultDelete(),
      error => this.errorStatus(error.status)
    );
  }
}
