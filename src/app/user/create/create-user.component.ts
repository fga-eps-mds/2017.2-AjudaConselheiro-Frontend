import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService, AlertService } from '../../services/index';
import { User } from '../../models/index';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService, AlertService],
  moduleId: module.id,
})
export class CreateUserComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  user: User;
  loading = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.user = new User();

  }

  // cpfDomainValidator(control: FormControl) {
  //   const cpf = control.value;
  //   let sum = 0;
  //   let remainder = 0;
  //   let i = 0;

  //   if (cpf === '00000000000') {
  //     return {
  //       cpfValid: {
  //         parsed: cpf
  //       }
  //     };
  //   }

  //   for (i = 1; i <= 9; i++) {
  //     const substring = +cpf.substring(i - 1, i);
  //     sum = sum + substring * (11 - i);

  //   }

  //   remainder = (sum * 10) % 11;

  //   if ((remainder === 10) || (remainder === 11)) {
  //     remainder = 0;
  //   }

  //   const parse = +cpf.substring(9, 10);
  //   if (remainder !== parse) {
  //     return {
  //       cpfValid: {
  //         parsed: cpf
  //       }
  //     };
  //   }

  //   sum = 0;
  //   for (i = 1; i <= 10; i++) {
  //     const substring = +cpf.substring(i - 1, i);
  //     sum = sum + substring * (12 - i);
  //   }
  //   remainder = (sum * 10) % 11;

  //   if ((remainder === 10) || (remainder === 11)) {
  //     remainder = 0;
  //   }

  //   const lastNumber = +cpf.substring(10, 11);
  //   if (remainder !== lastNumber) {
  //     return {
  //       cpfValid: {
  //         parsed: cpf
  //       }
  //     };
  //   }
  //   return null;
  // }

  register(): void {
    this.loading = true;
    this.userService.createUser(this.user)
      .subscribe(
      result => {
        this.user = result;
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
