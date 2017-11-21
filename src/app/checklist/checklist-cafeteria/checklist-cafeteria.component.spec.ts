import { APP_BASE_HREF, Location } from '@angular/common';
import { async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChecklistCafeteriaComponent } from './checklist-cafeteria.component';
import { ChecklistCafeteriaAnswers, ChecklistCafeteriaQuestions, ChecklistCafeteria, SectionCommentaryTwo} from './../../models/index';
import { ChecklistService, ProfileService, AuthenticationService} from './../../services/index';
import { AppModule } from './../../app.module';

describe('ChecklistCafeteriaComponent', () => {
  let component: ChecklistCafeteriaComponent;
  let fixture: ComponentFixture<ChecklistCafeteriaComponent>;
  let checklist: ChecklistCafeteria;
  const cafeteriaAnswers: Array<SectionCommentaryTwo> = ChecklistCafeteriaAnswers;
  let check: ChecklistService;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      providers: [
        ProfileService,
        AuthenticationService,
        {provide: APP_BASE_HREF, useValue : '/' },
      ],
      imports: [ AppModule ],
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
  });
