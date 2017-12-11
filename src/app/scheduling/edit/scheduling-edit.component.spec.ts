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
import { SchedulingEditComponent } from './scheduling-edit.component';
import { Scheduling } from './../../models/scheduling.model';
import { School } from '../../models/school.model';

describe('SchedulingCreateComponent', () => {
  let component: SchedulingEditComponent;
  let fixture: ComponentFixture<SchedulingEditComponent>;

  let fakeScheduling: Scheduling;
  fakeScheduling = new Scheduling();
  fakeScheduling.date = Date.now();
  fakeScheduling.id = 0;
  fakeScheduling.local = 'Brasília';
  fakeScheduling.members = 'nenhmum';
  fakeScheduling.school = new School();
  fakeScheduling.time = 0;
  fakeScheduling.type = 'Reunião';

  beforeEach(()  => {
    TestBed.configureTestingModule({
      declarations: [
        SchedulingEditComponent
      ],
      imports: [FormsModule,
        HttpModule,
        RouterTestingModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'agendamento', component: SchedulingEditComponent }
        ]),
      ],
      providers: [
        Scheduling,
        SchedulingService,
        AlertService,
        UserService,
        ProfileService,
        AuthenticationService
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do result', () => {
    component.result();
  });

  it('should do error', () => {
    component.error(400);
    component.error(401);
  });

  it('should do update scheduling', () => {
    component.scheduling = fakeScheduling;
    component.postText = 'Agendamento';
    component.updateScheduling();
  });

  it('should do result get scheduling', () => {
    component.resultGetScheduling(fakeScheduling);
  });

});
