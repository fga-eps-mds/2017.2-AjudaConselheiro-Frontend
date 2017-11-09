import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbgeComponent } from './ibge.component';

describe('IbgeComponent', () => {
  let component: IbgeComponent;
  let fixture: ComponentFixture<IbgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbgeComponent ]
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
