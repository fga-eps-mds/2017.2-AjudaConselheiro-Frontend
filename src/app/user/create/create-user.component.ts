import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from '../../services/index';
import { User } from '../../models/index';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  user: User;

  maskcpf: any[] = ['(', /[0-9]/, /\d/, /\d/, ')', '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
  }

  createUser(): void {
    if (this.formUser.form.valid) {
      this.userService.createUser(this.user);
      this.router.navigate(['/users']);
    }
  }

}
