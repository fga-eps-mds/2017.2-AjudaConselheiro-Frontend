import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingVisitComponent } from './scheduling-visit.component';

describe('SchedulingVisitComponent', () => {
  let component: SchedulingVisitComponent;
  let fixture: ComponentFixture<SchedulingVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
