import { IbgeService } from './../../services/ibge/ibge.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers, RequestOptions, Response, URLSearchParams, ResponseOptions } from '@angular/http';
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

  it('should ngOnInit', () => {
    component.ngOnInit();
    expect(component.councilGroup.codAplicativo).toEqual(462);
  });

  it('should do create council group', () => {

    const getPostsSpy = spyOn(component, 'getStateAbbr');

    component.councilGroup.municipio = undefined;
    component.createCouncilGroup();
    expect(component.councilGroup.municipio).toEqual('');
    component.councilGroup.municipio = 'Brasilia';
    component.createCouncilGroup();
    expect(component.getStateAbbr).toHaveBeenCalled();
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
  it('getStateAbb() should getState()(service)', () => {

    const service = fixture.debugElement.injector.get(IbgeService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getStateSpy = spyOn(service, 'getState').and.returnValue(
      Observable.of(fakeRes)
    );
    const getStateAbbrResultSpy = spyOn(component, 'getStateAbbrResult');

    fixture.detectChanges();

    component.getStateAbbr();

    expect(service.getState).toHaveBeenCalled();
    expect(component.getStateAbbrResult).toHaveBeenCalled();

  });
  it('getStateAbb() should createCouncil()(service) if erro', () => {
    const service = fixture.debugElement.injector.get(IbgeService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getStateSpy = spyOn(service, 'getState').and.returnValue(
      Observable.throw(fakeRes)
    );
    const createCouncilSpy = spyOn(component, 'createCouncil');

    fixture.detectChanges();

    component.getStateAbbr();

    expect(service.getState).toHaveBeenCalled();
    expect(component.createCouncil).toHaveBeenCalled();
  });



  it('should do create council', () => {
    const service = fixture.debugElement.injector.get(CouncilGroupService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const createCouncilSpy = spyOn(service, 'createCouncil').and.returnValue(
      Observable.of(fakeRes)
    );
    const getStateAbbrResultSpy = spyOn(component, 'createCouncilResult');

    fixture.detectChanges();

    component.createCouncil();

    expect(service.createCouncil).toHaveBeenCalled();
    expect(component.createCouncilResult).toHaveBeenCalled();
  });
  it('should do create council', () => {
    const service = fixture.debugElement.injector.get(CouncilGroupService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const createCouncilSpy = spyOn(service, 'createCouncil').and.returnValue(
      Observable.throw(fakeRes)
    );
    const createCouncilErrorSpy = spyOn(component, 'createCouncilError');

    fixture.detectChanges();

    component.createCouncil();

    expect(service.createCouncil).toHaveBeenCalled();
    expect(component.createCouncilError).toHaveBeenCalled();
  });


  it('should get sigla of result', () => {
    const result = {
      'sigla': 'DF'
    };
    component.councilGroup = fakeCouncil;
    component.getStateAbbrResult(result);
    expect(component.state).toEqual(result['sigla']);
    expect(component.councilGroup.estado).toEqual(component.state);
  });

  it('should create council error', () => {
    component.councilGroup = fakeCouncil;
    component.createCouncilError(400);
    expect(mockAlert.error).toHaveBeenCalledWith('O conselho de Brasília já se encontra cadastrado!');
    component.createCouncilError(401);
    expect(mockAlert.error).toHaveBeenCalledWith('Erro no servidor, tente novamente!');
  });

  it('should create council success', () => {
    component.councilGroup = fakeCouncil;
    component.councilGroup.municipio = 'Teste';;
    component.createCouncilResult();
    expect(mockAlert.success).toHaveBeenCalledWith('Conselho de ' + 'Teste' + ' criado com sucesso!');
  });

  it('should hasLocation with city.lengtn !== 0', () => {
    component.city = 'a';
    expect(component.hasLocation()).toBeTruthy();
  });

  it('should chosenCity(Teste)', () => {
    component.chosenCity('Teste')
    expect(component.city).toEqual('Teste');
  });
  it('should chosenCity with null', () => {
    component.chosenCity(null)
    expect(mockAlert.warn).toHaveBeenCalledWith('Nenhuma cidade selecionada');

  });
  it('should chosenState(Teste)', () => {
    component.chosenState('Teste')
    expect(component.city).toEqual('');
  });
  it('should chosenState with null', () => {
    component.chosenState(null)
    expect(mockAlert.warn).toHaveBeenCalledWith('Nenhum estado selecionado');

  });

});
