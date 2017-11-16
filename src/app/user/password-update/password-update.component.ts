import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import { AlertService, UserService } from '../../services/index';
import { User } from '../../models/index';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  user: User;
  userName = String;

  constructor(
    private alertService: AlertService,
    private userService: UserService,
    private router: Router

  ) { }

  ngOnInit() {
    this.user = new User();
    this.userName = this.getUserName();
  }

  result() {
    this.alertService.success('Usuário atualizado com sucesso! Faça seu login.');
  }

  error(status: any) {
    if (status === 400) {
      this.alertService.error('Aviso: Falha de autenticação! Senha não alterada');
    } else {
      this.alertService.error('Erro: falha na comunicação com o sistema!');
    }
  }

  updatePassword(current: string, newPassword: string) {

    this.user.senha = current;
    this.user.confirmaSenha = newPassword;

    this.userService.updatePassword(this.user.senha, this.user.confirmaSenha)
    .subscribe(
      result => {
        this.result();
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.alertService.success('Faça novamente o login com a nova senha');
      },
      error => {
        this.error(error.status);
        this.router.navigate(['/perfil']);
      });
  }

  // This function checks if there's a logged user and if it has a 'nomeCompleto'
    // Output: The user 'cod' or 'null' if there's no cod
    private getUserName() {
      const user = this.userService.getLoggedUser();

      // Checks if there's a user and if this user has a 'cod' attribute.
      if (user && 'nomeCompleto' in user) {
        return user.nomeCompleto;
      }

      return null;
    }

}
