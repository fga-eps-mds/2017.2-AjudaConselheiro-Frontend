import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchCouncilGroupComponent } from './search-council-group.component';
import { HttpModule, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { AlertService } from '../../services/alert/alert.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CouncilGroupService } from '../../services/index';

describe('SearchCouncilGroupComponent', () => {
  let component: SearchCouncilGroupComponent;
  let fixture: ComponentFixture<SearchCouncilGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchCouncilGroupComponent
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule ],
      providers: [
        AlertService,
        CouncilGroupService
      ]
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
