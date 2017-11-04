import { AlertService } from './../../services/alert/alert.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { UserService } from './../../services/user/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from './../../app.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidebarComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        UserService,
        AlertService
      ],
      imports: [
        HttpModule,
        RouterTestingModule,
        HttpClientModule
      ]
    }
  )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
