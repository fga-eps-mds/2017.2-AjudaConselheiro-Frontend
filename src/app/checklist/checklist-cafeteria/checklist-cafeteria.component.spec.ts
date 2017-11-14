import { APP_BASE_HREF, Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChecklistCafeteriaComponent } from './checklist-cafeteria.component';
import { ChecklistService } from './../../services/index';
import { ChecklistCafeteriaAnswers, ChecklistCafeteriaQuestions, ChecklistCafeteria, SectionCommentaryTwo} from './../../models/index';
import { AppModule } from './../../app.module';

describe('ChecklistCafeteriaComponent', () => {
  let component: ChecklistCafeteriaComponent;
  let fixture: ComponentFixture<ChecklistCafeteriaComponent>;
  let checklist: ChecklistCafeteria;
  let cafeteriaAnswers: Array<SectionCommentaryTwo> = ChecklistCafeteriaAnswers;
  let check: ChecklistService;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      imports: [ AppModule ],
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Test checklist Copy ', () => {
    const formMenuThree =  [
        {question: 'O cantineiro tem conhecimento da Lei n.º5.146/2013?', obs: '', answer: false},
        {question: 'A lei n.º36.900/2015?', obs: '*-*:D', answer: false},
        {question: 'O cantineiro já recebeu a visita da vigilância sanitária para a fiscalização?', obs: '', answer: true},
      ];
      component.copy(cafeteriaAnswers);
      expect(component.checklist.ChecklistCafeteriaAnswers).toEqual( cafeteriaAnswers);
    });


    it('should have not a text area for the commentary', () => {
      for ( let _i = 0; _i < ChecklistCafeteriaAnswers.length; _i++ ) {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
      if (component.cafeteriaAnswers[_i].answer !== true) {
        expect(compiled.querySelector('.commentaryThree')).toBe(null);
      }else {
        expect(compiled.querySelector('.commentaryThree')).not.toBe(null);
      }
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
    it('navigate to "checklist" before call to newFormulario', fakeAsync(() => {
      location = TestBed.get(Location);
      component.newFormulario();
      tick();
      expect(location.path()).toBe('/checklist');
    }));
  });
