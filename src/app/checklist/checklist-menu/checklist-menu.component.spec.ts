import { By } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from './../../app.module';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

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

  it('should have2 a text area for the fourth commentary', () => {
    for ( let _i = 0; _i < 4; _i++ ) {
    fixture.detectChanges();
    component.checkComentary[_i].value = true;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.textAreaTrue')).not.toBe('');
    }
  });
  it('should onSubmit()', fakeAsync( () => {
    fixture.detectChanges();
    spyOn(component , 'onSubmit');
    // tslint:disable-next-line:prefer-const
    let btn = fixture.debugElement.query( By.css('button') );
    btn.triggerEventHandler('ngSubmit', null);
    tick();
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  }));
  it('test onSubmit', function () {
    spyOn(console, 'log');
    // do your stuff that should log something
    component.onSubmit();
    expect(console.log).toHaveBeenCalled();
});
});
