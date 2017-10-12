import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarHomeComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {

  }

  logout() {
      console.log('Oi');
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
  }

  get hasToken(): any {
    return localStorage.hasOwnProperty('token');
  }

}
