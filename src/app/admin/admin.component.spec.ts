import { RouterTestingModule } from '@angular/router/testing';
import { ProfileService } from './../services/profile/profile.service';
import { Router, RouterModule } from '@angular/router';
import { AlertService } from './../services/alert/alert.service';
import { AuthenticationService } from './../services/authentication/authentication.service';
import { MockBackend } from '@angular/http/testing';
import { UserService } from './../services/user/user.service';
import { Http, ConnectionBackend, RequestOptions, HttpModule } from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [
        UserService,
        MockBackend,
        ConnectionBackend,
        AuthenticationService,
        ProfileService,
        AlertService  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
