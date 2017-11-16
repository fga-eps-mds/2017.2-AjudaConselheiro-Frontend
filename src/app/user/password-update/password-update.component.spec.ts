import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AlertService, UserService } from '../../services/index';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, Http, ConnectionBackend } from '@angular/http';

import { PasswordUpdateComponent } from './password-update.component';
import { Router } from '@angular/router/src/router';


describe('PasswordUpdateComponent', () => {
  let component: PasswordUpdateComponent;
  let fixture: ComponentFixture<PasswordUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpModule,

      ],
      declarations: [ PasswordUpdateComponent ],
      providers: [
        AlertService,
        UserService,
        Http,
        ConnectionBackend
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
