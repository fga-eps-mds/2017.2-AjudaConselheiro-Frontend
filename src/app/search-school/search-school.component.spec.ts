import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';


import { SearchSchoolComponent } from './search-school.component';
import { SchoolService } from '../services/index';


describe('SearchSchoolComponent', () => {
  let component: SearchSchoolComponent;
  let fixture: ComponentFixture<SearchSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSchoolComponent ],
      providers: [
        Http,
        SchoolService,
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
