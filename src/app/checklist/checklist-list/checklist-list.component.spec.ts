import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ChecklistListComponent } from './checklist-list.component';
import { AlertService, PostService } from '../../services/index';

describe('ChecklistListComponent', () => {
  let component: ChecklistListComponent;
  let fixture: ComponentFixture<ChecklistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistListComponent ],
      imports: [
        HttpModule,
        RouterTestingModule
       ],
      providers: [
        AlertService,
        PostService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // fit('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
