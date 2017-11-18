import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService, AlertService, AuthenticationService } from '../../services/index';
import { User } from '../../models/index';
import { UserMasks } from '../userMasks';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService, AlertService],
})

export class UserEditComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  user: User;
  userName = String;

  maskcpf = UserMasks.MASK_CPF;
  maskphone = UserMasks.MASK_PHONE;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.userService.getLoggedUser();
    this.userName = this.getUserName();
  }

  result() {
    this.alertService.success('Usuário atualizado com sucesso! Faça seu login.');
  }

  error(status: any) {
    if (status === 400) {
      this.alertService.warn('Aviso: Usuário já cadastrado ou desativado!');
    } else {
      this.alertService.error('Erro: falha na comunicação com o sistema!');
    }
  }

  updateUser(): void {
    this.userService.updateUser(this.user)
      .subscribe(
        result => {
          this.result();
          this.router.navigate(['/perfil']);
          this.alertService.success('Seu perfil será atualizado no seu próximo login');
        },
        error => {
          this.error(error.status);
        });
  }

  updateAdditionalFields(telefone: number, segmento: string) {
    this.userService.updateAdditionalFields(telefone, segmento)
    .subscribe(
      result => {
        this.result();
      },
      error => {
        this.error(error.status);
      });
  }

  deleteUser(): void {
    console.log('deletando contato...');
    this.userService.delete(this.user.cod).
    subscribe(result => console.log(result),
              error => console.log(error));
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
