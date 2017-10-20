import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateCouncilGroupComponent } from './create-council-group.component';
import { AlertService, CouncilGroupService, AuthenticationService } from '../../services/index';

describe('CreateCouncilGroupComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCouncilGroupComponent],
      imports: [
        HttpModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        AlertService,
        AuthenticationService
      ]
    })
      .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CreateCouncilGroupComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should know when localStorage has a token', () => {
    const fixture = TestBed.createComponent(CreateCouncilGroupComponent);
    localStorage.setItem('token', 'newToken');
    expect(fixture.componentInstance.isLoggedIn()).toBeTruthy();
  });

  it('should create council if user is logged in', () => {
    const fixture = TestBed.createComponent(CreateCouncilGroupComponent);
    const app = fixture.debugElement.componentInstance;

    const councilGroup = {
      codAplicativo: 462,
      codGrupoPai: 2,
      codObjeto: 1,
      // use different data so we don't get BadRequest error (group already registered)
      codTipoObjeto: Date.now(),
      municipio: 'Brasilia' + Date.now(),
      estado: 'DF',
      descricao: ''
    };

    const councilService = fixture.debugElement.injector.get(CouncilGroupService);
    const loginService = fixture.debugElement.injector.get(AuthenticationService);

    fixture.detectChanges();

    // User logs in and new token is added to localstorage
    loginService.login('gustavo@gmail.com', '1234567');

    expect(councilService.createCouncil(councilGroup)
      .toPromise()
      .then(
      (result) => {
        const council = result;
      },
      (error) => {
        const testError = error;
        expect(testError).toBe(undefined);
      }));
    });

    it('should return error 401 (Unauthorized) if user is not logged in', () => {
      const fixture = TestBed.createComponent(CreateCouncilGroupComponent);
      const app = fixture.debugElement.componentInstance;

      const councilGroup = {
        codAplicativo: 462,
        codGrupoPai: 2,
        codObjeto: 1,
        codTipoObjeto: Date.now(),
        municipio: 'Brasilia' + Date.now(),
        estado: 'DF',
        descricao: ''
      };

      // No token = user is logged out
      localStorage.removeItem('token');

      const councilService = fixture.debugElement.injector.get(CouncilGroupService);

      fixture.detectChanges();

      expect(councilService.createCouncil(councilGroup)
        .toPromise()
        .then(
        (result) => {
          const council = result;
        },
        (error) => {
          const testErrorStatus = error.status;
          expect(testErrorStatus).toEqual(401);
        }));
      });

});
