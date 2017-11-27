import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, Http, RequestOptions, ConnectionBackend } from '@angular/http';

import { ChecklistProductionComponent } from './checklist-production.component';
import {
  UserService,
  AlertService,
  ProfileService,
  AuthenticationService
} from '../../services/index';

describe('ChecklistProductionComponent', () => {
  let component: ChecklistProductionComponent;
  let fixture: ComponentFixture<ChecklistProductionComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistProductionComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpModule ],
      providers: [
        Http,
        ConnectionBackend,
        UserService,
        AlertService,
        ProfileService,
        AuthenticationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistProductionComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ngOnInit', () => {
    component.ngOnInit();
  });
  it('should onSubmit', () => {
    component.onSubmit();
  });

  it('should have back button', () => {
    const backButton = compiled.querySelector('.backButton');
    expect(backButton).toBeTruthy();
   });
});
