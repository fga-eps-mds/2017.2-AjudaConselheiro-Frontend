import { AuthenticationService } from './../services/authentication/authentication.service';
import { ProfileService } from './../services/profile/profile.service';
import { NgForm } from '@angular/forms';
import { AlertService } from './../services/alert/alert.service';
import { User } from './../models/user';
import { Router } from '@angular/router';
import { UserService } from './../services/user/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../user/create/user-create.component.css'],
  providers: [UserService],
  moduleId: module.id,
})
export class AdminComponent implements OnInit {
  @ViewChild('formUser') formUser: NgForm;
  user: User;

  constructor(private userService: UserService,
              private router: Router,
              private alertService: AlertService,
              private profileService: ProfileService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = new User();
    if ( !this.isAdmin()) {
      return  this.router.navigate(['']);
    }
  }
  isAdmin() {
   const profile = this.userService.getPerfilUser();
   return profile.tipoPerfil.codTipoPerfil === 249;
  }
  result() {
    this.alertService.success('Cadastro efetuado com sucesso!');
  }

  error(status: any) {
    if (status === 400) {
      this.alertService.warn('Aviso: Usuário já cadastrado ou desativado!');
    } else {
      this.alertService.error('Erro: falha na comunicação com o sistema!');
    }
  }
  register(): void {
   this.userService.createUser(this.user, '0')
        .subscribe(
        result => {
          this.createProfile();
          this.result();
        },
        error => {
          this.error(error.status);
        });
  }
  createProfile() {
  this.authenticationService.login(this.user.email, this.user.senha).subscribe(
    result => {
      this.profileService.setUserProfilePresident('', JSON.parse(result[1]._body).cod , 238, result[0])
      .subscribe(
        profile => console.log(profile)
      );
    }
  );
}
}
