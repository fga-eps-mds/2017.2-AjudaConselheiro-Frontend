import { AppModule } from './../../app.module';
import { APP_BASE_HREF, Location } from '@angular/common';
import { async, TestBed, ComponentFixture, fakeAsync, tick, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';
import { Http, ConnectionBackend } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SchedulingService, UserService,
  AlertService, ProfileService,
  AuthenticationService} from './../../services/index';
import { SchedulingHomeComponent } from './scheduling-home.component';
import { Scheduling } from './../../models/scheduling.model';

describe('SchedulingCreateComponent', () => {
  let component: SchedulingHomeComponent;
  let fixture: ComponentFixture<SchedulingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SchedulingHomeComponent
      ],
      imports: [FormsModule,
        HttpModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        SchedulingService,
        AlertService,
        UserService,
        ProfileService,
        AuthenticationService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do apen dialog', () => {
    component.openDialog();
  });

  it('should do close dialog', () => {
    component.closeDialog();
  });

  it('should delete', () => {
    component.delete();
  });

});
