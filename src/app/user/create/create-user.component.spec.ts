import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { CreateUserComponent } from './create-user.component';
import { UserService, AlertService } from '../../services/index';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/index';
import { MockBackend } from '@angular/http/testing';
import { DebugElement } from '@angular/core';
import { ActivatedRouteStub } from './testing/activated-route-stubs';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterStubService } from './testing/router-stubs';
import { tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('CreateUserComponent', () => {

  let fixture: ComponentFixture<CreateUserComponent>;
  let component: CreateUserComponent;
  let userService: UserService;
  let router: Router;
  const user: User = new User();
  const URL_NAV = '/login';

  user.nomeCompleto = 'Joao Pereira';
  user.nomeUsuario = 'Joao';
  user.CEP = '72000000';
  user.cod = 0;
  user.email = 'joao@angular.com';
  user.senha = '1234567';
  user.confirmaSenha = '1234567';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ],
      imports: [
        FormsModule,
        HttpModule
       ],
       providers: [
         Http,
         UserService,
         AlertService,
         MockBackend,
         ConnectionBackend,
         {
          provide: Router,
          useValue: new RouterStubService()
         },
         {
          provide: ActivatedRoute,
          useValue: new ActivatedRouteStub()
         },
      ]
    });

    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;

    userService = fixture.debugElement.injector.get(UserService);

    router = fixture.debugElement.injector.get(Router);

  }));

  it('shoul create new user', fakeAsync(() => {
    const result = 'Cadastrado com sucesso.';
    fixture.detectChanges();
    tick();

    const nomeCompleto = fixture.debugElement.query(By.css('#nomeCompleto')).nativeElement;
    nomeCompleto.value = user.nomeCompleto;
    nomeCompleto.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    const cep = fixture.debugElement.query(By.css('#CEP')).nativeElement;
    cep.value = user.CEP;
    cep.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    const email = fixture.debugElement.query(By.css('#email')).nativeElement;
    email.value = user.email;
    email.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    const senha = fixture.debugElement.query(By.css('#senha')).nativeElement;
    senha.value = user.senha;
    senha.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    const confirmaSenha = fixture.debugElement.query(By.css('#confirmaSenha')).nativeElement;
    confirmaSenha.value = user.confirmaSenha;
    confirmaSenha.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    const nomeUsuario = fixture.debugElement.query(By.css('#nomeUsuario')).nativeElement;
    nomeUsuario.value = user.nomeUsuario;
    nomeUsuario.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();

    const btnCadastrar = fixture.debugElement.query(By.css('button'));
    btnCadastrar.triggerEventHandler('click', null);

    const spy = spyOn(userService, 'createUser').and.returnValue('Cadastrado com sucesso.');
    expect(userService.createUser(user)).toBe( result , 'service returned stub value');
    expect(spy.calls.count()).toBe(1, 'stubbed method was called once');
    expect(userService.createUser).toHaveBeenCalledTimes(1);

    const spy1 = spyOn(router, 'navigate');
    const navArgs = spy1.calls.first();

  }));

  it('should return true when pass equals passwords', () => {
    fixture.detectChanges();
    expect(component.matchPassword(user.senha, user.confirmaSenha)).toEqual(true);
  });

  it('should return false when pass different passwords', () => {
    fixture.detectChanges();
    expect(component.matchPassword(user.senha, '123456789')).toEqual(false);
  });

});
