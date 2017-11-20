import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { IbgeComponent } from '../../ibge/ibge.component';
import { CouncilGroupCreateComponent } from './council-group-create.component';
import { AlertService, CouncilGroupService } from '../../services/index';
import { CouncilGroup } from '../../models/index';


describe('CouncilGroupCreateComponent', () => {
  let fixture: ComponentFixture<CouncilGroupCreateComponent>;
  let component: CouncilGroupCreateComponent;
  const fakeToken = 'FakeToken';
  let fakeCouncil: CouncilGroup;
  fakeCouncil = new CouncilGroup;
  fakeCouncil.municipio = 'Brasília';
  fakeCouncil.estado = 'Df';
  let mockAlert;

  beforeEach(async(() => {
    mockAlert = {
      success: jasmine.createSpy('success'),
      warn: jasmine.createSpy('warn'),
      error: jasmine.createSpy('error')
    };
    TestBed.configureTestingModule({
      declarations: [
        CouncilGroupCreateComponent,
        IbgeComponent
      ],
      imports: [
        HttpModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [AlertService,
        CouncilGroupService,
        {
          provide: AlertService,
          useValue: mockAlert
        }
      ]
    });

    // Mocking localStorage
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

    localStorage.setItem('token', 'fakeToken');
    fixture = TestBed.createComponent(CouncilGroupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should do create council group', () => {
    component.councilGroup.municipio = undefined;
    component.createCouncilGroup();

    component.councilGroup.municipio = 'Brasília';
    component.createCouncilGroup();
  });

  it('Should know if user is logged in', () => {
    localStorage.setItem('token', 'appToken');

    let result;
    result = component.isLoggedIn();
    expect(result).toEqual(true);

    localStorage.clear();
    result = component.isLoggedIn();
    expect(result).toEqual(false);

  });

  it('should has location', () => {
    let result;
    // Testing the method has location when exists valid state and valid city
    result = component.hasLocation();
    expect(result).toEqual(false);
    component.state = 'DF';
    component.city = 'Brasília';
    // Testing the method has location when not exists valid state and valid city
    result = component.hasLocation();
    expect(result).toEqual(true);

  });

  it('should chosen state', () => {
    component.councilGroup = fakeCouncil;
    // Testing the method when is passed valid state
    component.chosenState('52');
     // Testing the method when is passed invalid state
    component.chosenState(null);
    expect(mockAlert.warn).toHaveBeenCalledWith('Nenhum estado selecionado');

  });

  it('should chosen city', () => {
    component.councilGroup = fakeCouncil;
    // Testing the method when is passed valid city
    component.chosenCity('Brasília');
     // Testing the method when is passed invalid city
    component.chosenCity(null);
    expect(mockAlert.warn).toHaveBeenCalledWith('Nenhuma cidade selecionada');

  });

  it('should do create council', inject([CouncilGroupService], (service: CouncilGroupService) => {
    component.councilGroup = fakeCouncil;
    component.createCouncil();
  }));

  it('should get sigla of result', () => {
    const result = {
      'sigla': 'DF'
    };
    component.councilGroup = fakeCouncil;
    component.getStateAbbrResult(result);
  });

  it('should create council error', () => {
    component.councilGroup = fakeCouncil;
    component.createCouncilError(400);
    expect(mockAlert.error).toHaveBeenCalledWith('O conselho de Brasília já se encontra cadastrado!');
    component.createCouncilError(401);
  });

  it('should do create council result', () => {
    component.councilGroup = fakeCouncil;
    component.createCouncilResult();
  });

});
