import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/index';
@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
