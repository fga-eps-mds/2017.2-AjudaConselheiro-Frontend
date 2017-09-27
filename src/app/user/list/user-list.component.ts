import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/index';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => this.users = data);
  }

  deleteUser(user: User) {
    if (confirm('Deseja excluir o usuário "' + user.fullname + '"?')) {
      const index = this.users.indexOf(user);

      this.users.splice(index, 1);

      this.userService.deleteUser(user.id)
        .subscribe(null,
          err => {
            alert('Não foi possível excluir o usuário.');
            this.users.splice(index, 0, user);
          });
  }}

  // setPresident(user: User): void {
  //   if (confirm('Deseja setar o usuário "' + user.fullname + '" como presidente?')) {
  //     this.userService.setPresident(user.id);
  //     this.users = this.getUsers();
  //   }
  // }
}
