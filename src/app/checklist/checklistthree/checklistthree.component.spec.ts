import { FormMenuThree } from './../../models/checklistForms';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from './../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecklistthreeComponent } from './checklistthree.component';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('ChecklistthreeComponent', () => {
  let component: ChecklistthreeComponent;
  let fixture: ComponentFixture<ChecklistthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      imports: [ AppModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a text area for the fourth commentary', () => {
    for ( let _i = 0; _i < FormMenuThree.length; _i++ ) {
    component.formMenuThree[_i].answer = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.switch')).not.toBe(null);
    }
  });
  it('should have not a text area for the fourth commentary', () => {
    for ( let _i = 0; _i < FormMenuThree.length; _i++ ) {
    fixture.detectChanges();
    component.formMenuThree[_i].answer = false;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.switch')).not.toBe(null);
    }
  });
  it('should have2 not a text area for the fourth commentary', () => {
    for ( let _i = 0; _i < FormMenuThree.length; _i++ ) {
    fixture.detectChanges();
    component.formMenuThree[_i].answer = false;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.textAreaTrue')).toBe(null);
    }
  });
  it('should have2 a text area for the fourth commentary', () => {
    for ( let _i = 0; _i < FormMenuThree.length; _i++ ) {
    fixture.detectChanges();
    component.formMenuThree[_i].answer = true;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.textAreaTrue')).not.toBe('');
    }
  });
  it('should have a text area for the fourth observation', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.z-depth-1')).not.toBe(null);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should copy', fakeAsync( () => {
    fixture.detectChanges();
    spyOn(component , 'copy');
    // tslint:disable-next-line:prefer-const
    let btn = fixture.debugElement.query( By.css('button') );
    btn.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.copy).toHaveBeenCalled();
}));
it('should newFormulario', fakeAsync( () => {
  fixture.detectChanges();
  spyOn(component , 'newFormulario');
  // tslint:disable-next-line:prefer-const
  let btn = fixture.debugElement.query( By.css('button') );
  btn.triggerEventHandler('click', null);
  tick();
  fixture.detectChanges();
  expect(component.newFormulario).toHaveBeenCalled();
}));
});
