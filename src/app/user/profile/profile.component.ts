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
  user: User;
  constructor(
    private router: Router,
    private UserService: UserService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/home']);
    } else {
      this.formatUserData();
    };
    this.user = this.UserService.getLoggedUser();
  }

  delete() {
    this.UserService.delete(this.user.cod) .subscribe(
      result => console.log(result)
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
