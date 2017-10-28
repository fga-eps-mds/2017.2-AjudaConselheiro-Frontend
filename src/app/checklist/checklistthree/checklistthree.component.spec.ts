import { APP_BASE_HREF, Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChecklistthreeComponent } from './checklistthree.component';
import { ChecklistService } from './../../services/index';
import { ChecklistThree, SectionCommentaryTwo, FormMenuThree } from './../../models/index';
import { AppModule } from './../../app.module';

describe('ChecklistthreeComponent', () => {
  let component: ChecklistthreeComponent;
  let fixture: ComponentFixture<ChecklistthreeComponent>;
  let checklist: ChecklistThree;
  let formMenuThree: Array<SectionCommentaryTwo> = FormMenuThree;
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
    fixture = TestBed.createComponent(ChecklistthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Test checklist Copy ', () => {
    const formMenuThree =  [
        {question: 'O cantineiro tem conhecimento da Lei n.º5.146/2013?', obs: '', answer: false},
        {question: 'A lei n.º36.900/2015?', obs: '*-*:D', answer: false},
        {question: 'O cantineiro já recebeu a visita da vigilância sanitária para a fiscalização?', obs: '', answer: true},
      ];
      component.copy(formMenuThree);
      expect(component.checklist.FormMenuThree).toEqual( formMenuThree);
    });


    it('should have not a text area for the commentary', () => {
      for ( let _i = 0; _i < FormMenuThree.length; _i++ ) {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
      if(component.formMenuThree[_i].answer != true){
        expect(compiled.querySelector('.commentaryThree')).toBe(null);
      }
      else{
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
      location = TestBed.get(Location)
      component.newFormulario();
      tick();
      expect(location.path()).toBe('/checklist');
    }));
  });
