import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

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
  }));

  beforeEach(() => {
    const userServiceStub = {
      user: { fullname: 'Test User'}
    };

    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have fullname', () => {
    // const user = component.user;
    // expect(user.fullname).toEqual('Test User');
  });
});
