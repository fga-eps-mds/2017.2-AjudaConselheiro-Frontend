import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarHomeComponent implements OnInit {
  placement = 'left';
  title = 'Deseja sair?';
  message = 'Você realmente deseja sair da aplicação?';
  confirmText = 'Sim';
  cancelText = 'Não';
  confirm;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/home']);
  }

  hasToken(): boolean {
    return localStorage.hasOwnProperty('token');
  }
}
