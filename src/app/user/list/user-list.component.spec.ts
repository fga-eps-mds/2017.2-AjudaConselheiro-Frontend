import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService, AlertService, AuthenticationService,
  ProfileService } from '../../services/index';
import { UserListComponent } from './user-list.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [ RouterTestingModule, HttpModule, HttpClientModule ],
      providers: [
        UserService,
        AlertService,
        AuthenticationService,
        ProfileService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
