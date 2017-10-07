import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/index';
import { User } from '../../models/index';

import { UserMasks } from '../userMasks';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService],
})

export class UserEditComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  user: User;

  maskcpf = UserMasks.MASK_CPF;
  maskphone = UserMasks.MASK_PHONE;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.user = this.userService.searchUsingID(id);
  }

  updateUser(): void {
    if (this.formUser.form.valid ) {
      this.userService.updateUser(this.user);
      this.router.navigate(['/usuarios']);
    }
  }
}
