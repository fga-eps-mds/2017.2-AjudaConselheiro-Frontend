import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { UserCreateComponent } from './user-create.component';
import { UserService, AlertService } from '../../services/index';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/index';
import { MockBackend } from '@angular/http/testing';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FakeUser } from './testing/fake-user';
import { tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('UserCreateComponent', () => {

  let fixture: ComponentFixture<UserCreateComponent>;
  let component: UserCreateComponent;
  let user: User;
  const fakeUser: FakeUser = new FakeUser();
  let mockRouter;
  let mockAlert;
  let mockService;

  beforeEach(async(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    mockAlert = {
      success: jasmine.createSpy('success'),
      warn: jasmine.createSpy('warn'),
      error: jasmine.createSpy('error')
    };
    mockService = {
      UserCreate: jasmine.createSpy('UserCreate')
    };
    TestBed.configureTestingModule({
      declarations: [ UserCreateComponent ],
      imports: [
        FormsModule,
        HttpModule
       ],
       providers: [
         Http,
         UserService,
         MockBackend,
         ConnectionBackend,
         {
          provide: Router,
          useValue: mockRouter
         },
         {
          provide: AlertService,
          useValue: mockAlert
         },
         {
          provide: UserService,
          useValue: mockAlert
         }
      ]
    });

    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;

    component = fixture.debugElement.injector.get(UserCreateComponent);

  }));

  it('shoul create new user', fakeAsync(() => {
    const result = 'Cadastrado com sucesso.';
    user = fakeUser.generateFakeUser();
    fixture.detectChanges();
    tick();

    /*testing the input html full name*/
    const nomeCompleto = fixture.debugElement.query(By.css('#nomeCompleto')).nativeElement;
    nomeCompleto.value = user.nomeCompleto;
    nomeCompleto.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    /*testing the input html cep*/
    const cep = fixture.debugElement.query(By.css('#CEP')).nativeElement;
    cep.value = user.CEP;
    cep.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

     /*testing the input html email*/
    const email = fixture.debugElement.query(By.css('#email')).nativeElement;
    email.value = user.email;
    email.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    /*testing the input html password*/
    const senha = fixture.debugElement.query(By.css('#senha')).nativeElement;
    senha.value = user.senha;
    senha.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    /*testing the input html confirm password*/
    const confirmaSenha = fixture.debugElement.query(By.css('#confirmaSenha')).nativeElement;
    confirmaSenha.value = user.confirmaSenha;
    confirmaSenha.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    /*testing the input html user name*/
    const nomeUsuario = fixture.debugElement.query(By.css('#nomeUsuario')).nativeElement;
    nomeUsuario.value = user.nomeUsuario;
    nomeUsuario.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    const btnCadastrar = fixture.debugElement.query(By.css('button'));
    btnCadastrar.triggerEventHandler('click', null);


  }));

  it('should navigate', () => {
    fixture.detectChanges();
    component.navigate();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should result', () => {
    fixture.detectChanges();
    component.result();
    expect(mockAlert.success).toHaveBeenCalledWith('Cadastro efetuado com sucesso! Faça seu login.');
  });

  it('should warn alert', () => {
    fixture.detectChanges();
    component.error(400);
    expect(mockAlert.warn).toHaveBeenCalledWith('Aviso: Usuário já cadastrado ou desativado!');
  });

  it('should error alert', () => {
    fixture.detectChanges();
    component.error(401);
    expect(mockAlert.error).toHaveBeenCalledWith('Erro: falha na comunicação com o sistema!');
  });

  it('should return true when pass equals passwords', () => {
    user = fakeUser.generateFakeUser();
    fixture.detectChanges();
    expect(component.matchPassword(user.senha, user.confirmaSenha)).toEqual(true);
  });

  it('should return false when pass different passwords', () => {
    user = fakeUser.generateFakeUser();
    fixture.detectChanges();
    expect(component.matchPassword(user.senha, '123456789')).toEqual(false);
  });

});
