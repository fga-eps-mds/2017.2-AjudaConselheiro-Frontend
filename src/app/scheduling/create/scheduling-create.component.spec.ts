import { By } from '@angular/platform-browser';
import { AppModule } from './../../app.module';
import { APP_BASE_HREF, Location } from '@angular/common';
import { async, TestBed, ComponentFixture, fakeAsync, tick, inject } from '@angular/core/testing';
import { SchoolService } from '../../services/index';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';
import { Http, ConnectionBackend } from '@angular/http';
import { HttpModule } from '@angular/http';

import { SchedulingService, AlertService, UserService } from './../../services/index';
import { SchedulingCreateComponent } from './scheduling-create.component';
import { Scheduling } from './../../models/scheduling.model';
import { Search } from './../../models/search.model';

describe('SchedulingCreateComponent', () => {
  let component: SchedulingCreateComponent;
  let fixture: ComponentFixture<SchedulingCreateComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [AppModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('newScheduling should navigate to "agendamento" when finished', fakeAsync(() => {
  location = TestBed.get(Location);
    component.navigate();
    tick();
    expect(location.path()).toBe('/agendamento');
    location = TestBed.get(Location);
    component.newScheduling();
    tick();
    expect(location.path()).toBe('/agendamento');
    location = TestBed.get(Location);
    component.result();
    tick();
    expect(location.path()).toBe('/agendamento');
  }));


  it('should navigate to "agendamento"', () => {

    component.register();
    expect(location.path()).toBe('/agendamento');

  });
});
