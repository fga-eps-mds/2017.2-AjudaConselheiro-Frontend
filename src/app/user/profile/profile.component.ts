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
  public name;
  public biography;
  public email;
  cod: number;
  user: User;
  public password;

  constructor(
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService

  ) { }

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/home']);
    } else {
      this.formatUserData();
      this.user = this.userService.getLoggedUser();
    }

    this.cod = this.userService.getUserCod();
  }

  errorStatus (errorStatus: number) {
    console.log('error: ', errorStatus);
    if (errorStatus === 401) {
      this.alertService.warn('Aviso: senha errada!');
    }
  }

  validatePassword() {
    this.authenticationService.login(this.user.email, this.password)
    .subscribe(
      result => this.delete(),
      error => this.errorStatus(error.status));
  }

  resultDelete() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }

  delete() {
    this.userService.delete(this.user.cod) .subscribe(
      result => this.resultDelete()
    );
  }

  formatUserData() {
    const userInfo = localStorage.getItem('userData').split(',');

    this.name = userInfo[0];
    this.name = this.name.split(':')[1];
    this.name = this.name.replace(/"|{|}/g, '');

    this.biography = userInfo[1];
    this.biography = this.biography.split(':')[1];
    this.biography = this.biography.replace(/"|{|}/g, '');

    this.email = userInfo[3];
    this.email = this.email.split(':')[1];
    this.email = this.email.replace(/"|{|}/g, '');

  }
}
