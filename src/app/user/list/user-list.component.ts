import { Component, OnInit } from '@angular/core';
import { UserService, AlertService } from '../../services/index';
import { User } from '../../models/index';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  moduleId: module.id,

})
export class UserListComponent implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getUsers();
}

  deleteUser(id: number) {
     this.userService.deleteUser(id).subscribe(() => { this.loadAllUsers(); }
   );
  }

private loadAllUsers() {
    this.userService.getUsers().subscribe(users => { this.users = users; });
  }
}
