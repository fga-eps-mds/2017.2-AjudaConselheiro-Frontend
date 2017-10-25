import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { CreateUserComponent } from './create-user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService, AlertService } from '../../services/index';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/index';
import { MockBackend } from '@angular/http/testing';

describe('CreateUserComponent', () => {

  let fixture: ComponentFixture<CreateUserComponent>;
  const user: User = new User();
  let component: CreateUserComponent;

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
        RouterTestingModule,
        FormsModule,
        HttpModule
       ],
       providers: [
         Http,
         AlertService,
         MockBackend,
         ConnectionBackend
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should return true when pass equals passwords', () => {
    expect(component.matchPassword(user.senha, user.confirmaSenha)).toEqual(true);
  });

  it('should return false when pass different passwords', () => {
    expect(component.matchPassword(user.senha, '123456789')).toEqual(false);
  });

});
