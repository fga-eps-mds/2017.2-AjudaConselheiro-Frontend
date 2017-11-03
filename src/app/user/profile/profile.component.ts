import { ProfileService } from './../../services/profile/profile.service';
import { AlertService } from './../../services/alert/alert.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  data: string;
  constructor(
    private UserService: UserService,
    private router: Router,
    private alertService: AlertService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {   
    this.data = null;
  }

  savePosts(strCPF: any) {

    if(this.testCPF(strCPF) === true) {this.profileService.createUserProfile(this.data).subscribe(
      result => console.log(result)
    );}
    if (strCPF === null) {
      this.alertService.warn('Digite seu CPF');
    } else if (this.testCPF(strCPF) === false) {
      this.alertService.error('CPF inválido/Digite um CPF válido');
    }
else {
this.alertService.success('CPF válido');
}

  }
  testCPF(strCPF: string) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
  if (strCPF == "11111111111") return false;
  if (strCPF == "22222222222") return false;
  if (strCPF == "33333333333") return false;
  if (strCPF == "44444444444") return false;
  if (strCPF == "55555555555") return false;
  if (strCPF == "66666666666") return false;
  if (strCPF == "77777777777") return false;
  if (strCPF == "88888888888") return false;
  if (strCPF == "99999999999") return false;
  if (strCPF == null) return false;
    
	for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
	
	Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
	
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
}
