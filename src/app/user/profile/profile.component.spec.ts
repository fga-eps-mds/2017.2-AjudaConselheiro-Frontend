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
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Teste CPF', () => {
    let soma = '00000000000';
    for (let i = 0 ; i <= 9 ; i++) {
      expect(component.testCPF( soma )).toEqual( false );
      soma = String(11111111111 + parseInt( soma, 10));
    }
    expect(component.testCPF( null )).toEqual( false );
    expect(component.testCPF( '21536586469' )).toEqual( false );
    expect(component.testCPF( '24499898978' )).toEqual( true );
  });
  it('should create', () => {
    spyOn(component, 'testCPF');
    component.savePosts( '215365,6469' );
    expect(component.testCPF).toHaveBeenCalled();
    component.savePosts( null );
    expect(component.testCPF).toHaveBeenCalled();
  });
});
