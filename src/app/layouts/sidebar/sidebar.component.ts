import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from './../../models/user';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
}
