import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

  users: Array<User> = [
    new User('Filipe Dias', 'lipao.dias@hotmail.com', '(061) 983131691', 'Brasilia', 1045906, true, 'teste123'),
    new User('Filipe Dias 2', 'lipao.dias@hotmail.com', '(061) 983131691', 'Brasilia', 1045906, true, 'teste123'),
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.getUsers();
  }

  create(user: User) {
    this.users.push(user);
  }

  getUsers() {
    this.userService.getUsers()
    .then(users => this.users = users);
  }

}
