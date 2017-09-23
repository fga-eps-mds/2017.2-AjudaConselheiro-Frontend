import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: './form-signup/form-signup.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

}
