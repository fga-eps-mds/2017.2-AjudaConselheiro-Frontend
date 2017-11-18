import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';

import { Http, HttpModule, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AlertService, AuthenticationService, ProfileService,
  UserService } from '../../services/index';
import { ProfileComponent } from './profile.component';
import { FakeUser } from '../create/testing/fake-user';
import { User } from '../../models/index';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockAlert;
  const fakeUser: FakeUser = new FakeUser();

  beforeEach(async(() => {
    mockAlert = {
      success: jasmine.createSpy('success'),
      warn: jasmine.createSpy('warn'),
      error: jasmine.createSpy('error')
  };
    TestBed.configureTestingModule(
      {
        declarations: [
          ProfileComponent,
        ],
        imports: [
          HttpModule,
          FormsModule,
          RouterTestingModule
        ],
        providers: [
          Http,
          MockBackend,
          ConnectionBackend,
          AlertService,
          ProfileService,
          UserService,
          AuthenticationService,
          {
            provide: AlertService,
            useValue: mockAlert
         }
        ]
      })
    .compileComponents();

    localStorage.setItem('token', 'aToken');
    localStorage.setItem('userData', '{\"name\":\"name\",\"bio\":\"bio\",\"cod\":\"cod\",\"email\":\"email\"}');
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    localStorage.clear();
    component.ngOnInit();
  });

  it('should get formated user data', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.biography).toEqual('bio');
    expect(fixture.componentInstance.name).toEqual('name');
    expect(fixture.componentInstance.email).toEqual('email');
  });

  // it('should validate password',  inject([AuthenticationService], (service: AuthenticationService) => {
  //   component.user = fakeUser.generateFakeUser();
  //   component.password = '1234567';
  //   component.validatePassword();
  // }));

  it('should error status', () => {
    component.errorStatus(401);
    expect(mockAlert.warn).toHaveBeenCalledWith('Aviso: senha errada!');
    component.errorStatus(400);
  });

  // fit('should delete', inject([UserService], (service: UserService)  => {
  //   component.user.cod = 48;
  //   component.delete();
  // }));

  it('should delete', ()  => {
    component.resultDelete();
  });

});
