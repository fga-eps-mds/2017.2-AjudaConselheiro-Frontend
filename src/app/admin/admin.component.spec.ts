import { RouterTestingModule } from '@angular/router/testing';
import { ProfileService } from './../services/profile/profile.service';
import { Router, RouterModule } from '@angular/router';
import { AlertService } from './../services/alert/alert.service';
import { AuthenticationService } from './../services/authentication/authentication.service';
import { MockBackend } from '@angular/http/testing';
import { UserService } from './../services/user/user.service';
import { Http, ConnectionBackend, RequestOptions, HttpModule } from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let mockAlert;

  beforeEach(async(() => {
    mockAlert = {
      success: jasmine.createSpy('success'),
      warn: jasmine.createSpy('warn'),
      error: jasmine.createSpy('error')
  };
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [
        UserService,
        MockBackend,
        ConnectionBackend,
        AuthenticationService,
        ProfileService,
        AlertService,
        {
          provide: AlertService,
          useValue: mockAlert
       }  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    localStorage.clear();
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test isAdmin()', () => {
    localStorage.setItem('isLoggedIn', 'true');
    const body = {
      'camposAdicionais': 'nada',
      'tipoPerfil': {
        'codTipoPerfil': 249,
      }
    }
    localStorage.setItem('Profile',JSON.stringify(body));
    expect(component.isAdmin()).toBeTruthy();
  });

it('test result() ', () => {
  component.result();
  expect(mockAlert.success).toHaveBeenCalledWith('Cadastro efetuado com sucesso!');
});
it('test error() ', () => {
  component.error(400);
  expect(mockAlert.warn).toHaveBeenCalledWith('Aviso: Usuário já cadastrado ou desativado!');
  component.error(0);
  expect(mockAlert.error).toHaveBeenCalledWith('Erro: falha na comunicação com o sistema!');

});
});
