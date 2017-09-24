import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/index';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
    this.users = [
      new User(1, 'Filipe Dias', 'lipao.dias@hotmail.com', '(61)983131691', 'Brasilia', 573, true, 'teste123'),
      new User(1, 'Gustavo Carvalho', 'gustavocarvalho1002@gmail.com', '(61)30224461', 'Brasilia', 723, false, 'teste321'),

    ];
  }

  getUsers(): User[] {
    return this.userService.getUsers();
  }

  // deleteUser($event: any, user: User): void {
  //   $event.preventDefault();
  //   if (confirm('Dejesa remover o usuário "' + user.full_name + '"?'))
  //   this.userService.deleteUser(user.id);
  //   this.users = this.userService.getUsers();
  // }
}
