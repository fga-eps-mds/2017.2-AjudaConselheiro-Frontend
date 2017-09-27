import { Component, OnInit } from '@angular/core';
import { User } from '../../models/index';
import { UserService } from '../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];
  maskcpf: any[] = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
     .subscribe(data => this.users = data);
  }

  getLocalStorage(): boolean {
    const myStorage = window.localStorage;
    const users = myStorage.getItem('users');
    console.log(users);
      return true;
  }

  login(): boolean {
    const myStorage = window.localStorage;
    const users = myStorage.getItem('users');

    return true;
  }

}
