import { ProfileService } from './../../services/profile/profile.service';
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
  data: any;

  constructor(
    private UserService: UserService,
    private router: Router,
    private alertService: AlertService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {}

  savePosts() {
    this.profileService.savePost(this.data).subscribe(
      result => console.log(result)
    );
  }
}
