import { Component, OnInit } from '@angular/core';
import { User } from '../../models/index';
import { UserService } from '../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User[];
  maskcpf: any[] = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.getUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsers();
  }

}
