import { AlertService } from './../../services/alert/alert.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;

  constructor(
    private UserService: UserService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {}
}
