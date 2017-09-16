import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselorComponent } from './counselor.component';

describe('CounselorComponent', () => {
  let component: CounselorComponent;
  let fixture: ComponentFixture<CounselorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
