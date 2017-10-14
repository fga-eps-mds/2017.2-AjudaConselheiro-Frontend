import { Component, OnInit, ViewChild} from '@angular/core';
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
