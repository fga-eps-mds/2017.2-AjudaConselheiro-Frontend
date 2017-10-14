import {  async, TestBed, ComponentFixture } from '@angular/core/testing';
import { SchoolService } from '../../services/index';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SchedulingService } from './../../services/scheduling.service';
import { MockBackend } from '@angular/http/testing';
import { CreateSchedulingComponent } from './create-scheduling.component';
import { Scheduling } from './../../models/scheduling.model';
import { Search } from './../../models/search.model';
import { FormsModule }   from '@angular/forms';
import { Http, ConnectionBackend } from '@angular/http';
import { HttpModule } from '@angular/http';

describe('HomeComponent', () => {
  let component: CreateSchedulingComponent;
  let fixture: ComponentFixture<CreateSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateSchedulingComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpModule
      ],
      providers: [
        SchedulingService,
        SchoolService,
        Http,
        MockBackend,
        ConnectionBackend,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('state should have default data', () => {
    component.state = 'df';
    expect(component.state).toEqual('df');
  });

  it('cityFilter should apply a regex on untreated string', () => {
    const city = {
      name: <string> 'BRASILIA',
      code: <string> '5300108'
    }
    expect(component.cityFilter('"5300108:BRASILIA"')).toEqual(city);
  });

  it('cityPush should push a filtered city into a array', () => {
    const city = {
      name: <string> 'BRASILIA',
      code: <string> '5300108'
    }
    expect(component.cityFilter('"5300108:BRASILIA"')).toEqual(city);
  });

});
