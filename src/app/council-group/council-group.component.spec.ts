import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CouncilGroupComponent } from './council-group.component';

describe('CouncilGroupComponent', () => {
  let component: CouncilGroupComponent;
  let fixture: ComponentFixture<CouncilGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilGroupComponent ],
      imports: [
        HttpModule,
        FormsModule
       ]
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
