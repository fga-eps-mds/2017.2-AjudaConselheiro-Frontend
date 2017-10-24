import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SearchSchoolComponent } from './search-school.component';
import { SchoolService, AlertService } from '../services/index';

describe('SearchSchoolComponent', () => {
  let component: SearchSchoolComponent;
  let fixture: ComponentFixture<SearchSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSchoolComponent ],
      imports: [ HttpModule ],
      providers: [
        SchoolService,
        AlertService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
