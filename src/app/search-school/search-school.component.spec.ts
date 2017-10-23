import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSchoolComponent } from './search-school.component';

describe('SearchSchoolComponent', () => {
  let component: SearchSchoolComponent;
  let fixture: ComponentFixture<SearchSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
