import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, ConnectionBackend,
  ResponseOptions, RequestOptions, Response,
  BaseRequestOptions, Headers } from '@angular/http';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

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
          AlertService,
          UserService,
          ProfileService,
          AuthenticationService,
          {
            provide: AlertService,
            useValue: mockAlert
         }
        ]
      })
    .compileComponents();

    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  }));

  beforeEach(() => {
    const user = {nomeCompleto: 'teste', cod: 123, email: 'abc@abc.com', biografia: 'bio'};
    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('token', 'fakeToken');

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
