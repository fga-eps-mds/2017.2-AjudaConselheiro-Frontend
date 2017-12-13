import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, UserService } from './../../services/index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthenticationService],
  moduleId: module.id
})
export class NavbarComponent implements OnInit {
  placement = 'left';
  title = 'Deseja sair?';
  message = 'Você realmente deseja sair da aplicação?';
  confirmText = 'Sim';
  cancelText = 'Não';
  slideOpen = false;
  confirm: any;
  userId = 0;
  userName = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userId = this.userService.getUserCod();
    this.userName = this.userService.getUserName();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }

  openSlideMenu() {
    return (document.getElementById('side-menu').style.width = '250px');
  }

  closeSlideMenu() {
    return (document.getElementById('side-menu').style.width = '0px');
  }

  hasToken(): boolean {
    return localStorage.hasOwnProperty('token');
  }
}
