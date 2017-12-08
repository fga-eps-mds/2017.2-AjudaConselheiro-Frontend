import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserEditComponent } from './user-edit.component';
import { UserService, ProfileService, AuthenticationService,
  AlertService } from '../../services/index';

// import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('UserEditComponent', () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;

  beforeEach(async(() => {
    const userServiceStub = {
      user: { fullname: 'Test User'}
    };

    TestBed.configureTestingModule({
      declarations: [
        UserEditComponent,
       ],
      imports: [
        FormsModule,
        TextMaskModule,
        HttpModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        AlertService,
        AuthenticationService,
        ProfileService,
        { provide: UserService, useValue: userServiceStub },
        // { provide: ComponentFixtureAutoDetect, useValue: true }
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
    const userServiceStub = 'userName: \'name\'';

    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have fullname', () => {
    const user =  { nomeCompleto: 'userFullName'};
    localStorage.setItem('userData', JSON.stringify(user));
    component.ngOnInit();
    expect(localStorage.getItem('userData')).toEqual(JSON.stringify(user));
  });

  it('should not have fullname', () => {
    component.ngOnInit();
    expect(component.user).toBeUndefined();
  });
});
