import { FormsModule, NgForm } from '@angular/forms';
import { Http, HttpModule, ConnectionBackend } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, Input, NO_ERRORS_SCHEMA } from '@angular/core';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';

import { AlertService, AuthenticationService, ProfileService,
  UserService } from '../../services/index';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
        declarations: [
          ProfileComponent,
        ],
        schemas: [NO_ERRORS_SCHEMA],
        imports: [
          FormsModule,
          RouterTestingModule,
          HttpModule
        ],
        providers: [
          Http,
          MockBackend,
          ConnectionBackend,
          AlertService,
          ProfileService,
          UserService,
          AuthenticationService
        ]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    localStorage.setItem('token', 'aToken');
    localStorage.setItem('userData', '{\"name\":\"name\",\"bio\":\"bio\",\"cod\":\"cod\",\"email\":\"email\"}');
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get formated user data', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.biography).toEqual('bio');
    expect(fixture.componentInstance.name).toEqual('name');
    expect(fixture.componentInstance.email).toEqual('email');
  });
});
