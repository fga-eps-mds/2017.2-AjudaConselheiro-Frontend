import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule, Http, ConnectionBackend, RequestOptions } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { CouncilGroupDeleteComponent } from './delete.component';
import { CouncilGroupService, AlertService } from '../../services/index';
import { CouncilGroup } from '../../models/index';


describe('CouncilGroupDeleteComponent', () => {
  let component: CouncilGroupDeleteComponent;
  let fixture: ComponentFixture<CouncilGroupDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         CouncilGroupDeleteComponent,
         ],
      providers: [
        CouncilGroupService,
        AlertService,
      ],
        imports: [
          HttpModule,
          RouterTestingModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilGroupDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
