import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCouncilGroupComponent } from './search-council-group.component';

describe('SearchCouncilGroupComponent', () => {
  let component: SearchCouncilGroupComponent;
  let fixture: ComponentFixture<SearchCouncilGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCouncilGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCouncilGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
