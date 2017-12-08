import { ChecklistService, PostService } from '../../services';
import { async, ComponentFixture, TestBed,
  inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule, Http, ConnectionBackend,
  ResponseOptions, RequestOptions, Response,
  BaseRequestOptions, Headers } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChecklistUpdateComponent } from './checklist-update.component';

import { UserService, AlertService, ProfileService,
  AuthenticationService } from '../../services/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('CheckListUpdateComponent', () => {
  let component: ChecklistUpdateComponent;
  let fixture: ComponentFixture<ChecklistUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        ChecklistUpdateComponent
      ],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: RequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        ConnectionBackend,
        UserService,
        AlertService,
        ProfileService,
        AuthenticationService,
        PostService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',
  inject([PostService], (service) => {
    expect(component).toBeTruthy();
  }));

  // For recoverPassword()
  it('getPosts() should call postService',
    inject([PostService], (service) => {

  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should ngOnInit', () => {
    component.ngOnInit();
  });
  it('should onSubmit', () => {
    component.onSubmit();
  });
});
