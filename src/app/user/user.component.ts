import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  error: any;

  constructor(
    private userService: UserService) { }

  getUsers(): void {
    this.userService
      .getUsers()
      .then(users => this.users = users)
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    // this.getUsers();
  }
}
