import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { AlertService } from '../../services/alert/alert.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [
          TextMaskModule,
          HttpModule,
          RouterTestingModule,
          FormsModule
        ],
        providers: [ AlertService ]
      })
      .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Entering email', () => {
    const email = fixture.debugElement.nativeElement;
    expect(email.nativeElement).not.toBe(null);
  });

  it('Entering password', () => {
    const password = fixture.debugElement.nativeElement;
    expect(password.nativeElement).not.toBe(null);
  });
});
