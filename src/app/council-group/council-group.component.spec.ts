import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilGroupComponent } from './council-group.component';

describe('CouncilGroupComponent', () => {
  let component: CouncilGroupComponent;
  let fixture: ComponentFixture<CouncilGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
