import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from './../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistMenuComponent } from './checklist-menu.component';

describe('Checklist-menuComponent', () => {
  let component: ChecklistMenuComponent;
  let fixture: ComponentFixture<ChecklistMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      imports: [ AppModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
