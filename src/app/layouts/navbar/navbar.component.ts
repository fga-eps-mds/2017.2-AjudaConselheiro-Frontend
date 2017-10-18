import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
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
      localStorage.setItem('loggedOut', 'true');
      this.router.navigate(['/home']);
  }

  get hasToken(): any {
    return localStorage.hasOwnProperty('token');
  }

}
