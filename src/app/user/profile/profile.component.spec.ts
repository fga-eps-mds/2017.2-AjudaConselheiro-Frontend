import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from './../../services/alert/alert.service';
import { FormsModule } from '@angular/forms';
import { HttpModule, ConnectionBackend } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './../../services/profile/profile.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, ViewChild, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { Http } from '@angular/http';


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
          UserService
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
});
