import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/index';
import { User } from '../../models/index';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService],
})
export class UserEditComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  user: User;

  maskcpf: any[] = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  maskphone: any[] = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  updateUser(): void {
    if (this.formUser.form.valid ) {
      this.userService.updateUser(this.user);
      this.router.navigate(['/usuarios']);
    }
  }

deleteUser(): void {
  console.log('deletando contato...');
  this.userService.delete(this.user.cod).
  subscribe(result => console.log(result),
            error => console.log(error));
}
}
