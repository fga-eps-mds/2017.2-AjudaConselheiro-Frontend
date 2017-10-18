import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    loggedOut: boolean;
    type = 'success';

    ngOnInit() {
      this.loggedOut = this.fromLocalStorage();

      setTimeout(function() {
       this.loggedOut = localStorage.loggedOut = false;
     }, 5000);
    }

    fromLocalStorage(): boolean {
      let result;
      if (localStorage.hasOwnProperty('loggedOut')) {
        if (localStorage.getItem('loggedOut') === 'true') {
          result = true;
        } else {
          result = false;
        }
      } else {
        result = false;
      }
      return result;
    }
}
