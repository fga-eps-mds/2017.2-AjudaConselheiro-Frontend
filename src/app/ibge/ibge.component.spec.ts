import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertService } from '../services/alert/alert.service';
import { State } from '../models/index';

import { IbgeComponent } from './ibge.component';

describe('IbgeComponent', () => {
  let component: IbgeComponent;
  let fixture: ComponentFixture<IbgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbgeComponent ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule ],
      providers: [
        AlertService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
