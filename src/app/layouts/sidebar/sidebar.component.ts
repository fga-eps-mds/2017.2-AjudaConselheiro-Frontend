import { UserService } from './../../services/user/user.service';
import { NgForm } from '@angular/forms';
import { User } from './../../models/user';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  placement = 'right';
  title = 'Apagar conta?';
  message = 'Você realmente deseja apagar sua conta?';
  confirmText = 'Sim';
  cancelText = 'Não';
  confirm;

  @ViewChild('formUser') formUser: NgForm;
  user: User;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user = this.userService.getLoggedUser();
  }

  hasToken(): boolean {
    return localStorage.hasOwnProperty('token');
  }

  deleteUser(): any {
    console.log('Requesting user deletion');
    this.userService.delete();
  }
}
