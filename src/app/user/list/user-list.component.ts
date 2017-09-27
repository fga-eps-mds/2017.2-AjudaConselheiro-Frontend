import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/index';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService],
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsers();
  }

  deleteUser($event: any, user: User): void {
    $event.preventDefault();
    if (confirm('Deseja excluir o usuário "' + user.fullname + '"?')) {
    this.userService.deleteUser(user.id);
    this.users = this.userService.getUsers();
  }}

  isPresident(user: User): void {
    if (confirm('Deseja setar o usuário "' + user.fullname + '" como presidente?')) {
      this.userService.isPresident(user.id);
      this.users = this.getUsers();
    }
  }
}
