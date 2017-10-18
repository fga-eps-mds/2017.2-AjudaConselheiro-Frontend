import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    isLoggedIn: boolean;

    ngOnInit() {
      this.isLoggedIn = this.hasToken();
    //   setTimeout(function() {
    //    this.isLoggedIn = localStorage.isLoggedIn = false;
    //  }, 5000);
    }

    hasToken(): boolean {
      if (localStorage.hasOwnProperty('token')) {
        return true;
      }
      return false;
    }
}
