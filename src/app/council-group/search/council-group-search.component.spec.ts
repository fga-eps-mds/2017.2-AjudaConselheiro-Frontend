import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CouncilGroupSearchComponent } from './council-group-search.component';
import { HttpModule, Headers, RequestOptions, Response, URLSearchParams, ResponseOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {
  CouncilGroupService, IbgeService, AlertService,
  UserService, ProfileService,
  AuthenticationService
} from '../../services/index';
import { State, CouncilGroup } from '../../models/index';
import { IbgeComponent } from '../../ibge/ibge.component';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Notification } from '../../models/notification';

describe('CounciCouncilGroupServicelGroupSearchComponent', () => {
  let component: CouncilGroupSearchComponent;
  let fixture: ComponentFixture<CouncilGroupSearchComponent>;
  let fakeCouncil: CouncilGroup;
  fakeCouncil = new CouncilGroup;
  fakeCouncil.municipio = 'Brasília';
  fakeCouncil.estado = 'Df';
  let mockAlert;
  const council = {
    'descricao': 'CAE-27-Barra de Santo Antônio',
    'codGrupo': 1059,
    'codObjeto': 1510426954450
  };
  let members = [
    {
      'dataHoraAtivo': '2017-11-26T14:29:39BRST',
      'links': [
        {
          'rel': 'self',
          'href': 'http://mobile-aceite.tcu.gov.br/appCivicoRS/rest/grupos/953/membros/1061'
        },
        {
          'rel': 'pessoa',
          'href': 'http://mobile-aceite.tcu.gov.br/appCivicoRS/rest/pessoas/5676'
        }
      ]
    }];

  beforeEach(async(() => {
    mockAlert = {
      success: jasmine.createSpy('success'),
      warn: jasmine.createSpy('warn'),
      error: jasmine.createSpy('error')
    };

    TestBed.configureTestingModule({
      declarations: [
        CouncilGroupSearchComponent,
        IbgeComponent
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        CouncilGroupService,
        IbgeService,
        UserService,
        ProfileService,
        AuthenticationService,
        {
          provide: AlertService,
          useValue: mockAlert
        }
      ]
    })
      .compileComponents();
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilGroupSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search council group', () => {
    const getPostsSpy = spyOn(component, 'getStateAbbr');

    component.councilGroup.municipio = undefined;
    component.searchCouncilGroup();
    expect(component.councilGroup.municipio).toEqual('');
    component.councilGroup.municipio = 'Brasilia';
    component.searchCouncilGroup();
    expect(component.getStateAbbr).toHaveBeenCalled();
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

  it('Should know if user is logged in', () => {
    localStorage.setItem('token', 'appToken');

    let result;
    result = component.isLoggedIn();
    expect(result).toEqual(true);

    localStorage.clear();
    result = component.isLoggedIn();
    expect(result).toEqual(false);

  });


  it('should filter council', () => {
    const result = [council];

    // Testing case where advice is foundCouncil
    component.description = 'CAE-27-Barra de Santo Antônio';
    component.filterCouncil(result);
    expect(component.foundCouncil).toBe(true);


    // Testing case where advice is not foundCouncil
    component.foundCouncil = false;
    component.description = 'CAE-DF-Brasília';
    component.filterCouncil(result);
    expect(component.foundCouncil).toBe(false);



  });

  it('should get state abbreviated', () => {
    const estado = {
      'id': 52,
      'sigla': 'GO',
      'nome': 'Goiás',
      'regiao': {
        'id': 5,
        'sigla': 'CO',
        'nome': 'Centro-Oeste'
      }
    };
    component.city = 'Goiânia';
    component.getStateAbbrResult(estado);
    expect(component.description).toEqual('CAE-GO-Goiânia');
  });

  it('should get council groups', () => {
    const result = [council];

    component.description = 'CAE-27-Barra de Santo Antônio';
    component.getCouncilGroupsResult(result);
    expect(mockAlert.success).toHaveBeenCalledWith('Conselho de ' + component.city + ' encontrado!');


    component.foundCouncil = false;
    component.description = 'CAE-DF-Brasília';
    component.getCouncilGroupsResult(result);
    expect(mockAlert.warn).toHaveBeenCalledWith('Conselho de ' + component.city + ' não cadastrado!');

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
  it('getStateAbb() should createCouncil()(service) if error', () => {
    const service = fixture.debugElement.injector.get(IbgeService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getStateSpy = spyOn(service, 'getState').and.returnValue(
      Observable.throw(fakeRes)
    );

    fixture.detectChanges();

    component.getStateAbbr();

    expect(service.getState).toHaveBeenCalled();
    expect(mockAlert.error).toHaveBeenCalledWith('Erro ao selecionar estado');
  });

  it('getCouncilGroups() should getState()(service)', () => {

    const service = fixture.debugElement.injector.get(CouncilGroupService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getStateSpy = spyOn(service, 'getCouncilGroups').and.returnValue(
      Observable.of(fakeRes)
    );
    const getCouncilGroupsResultSpy = spyOn(component, 'getCouncilGroupsResult');

    fixture.detectChanges();

    component.getCouncilGroups();

    expect(service.getCouncilGroups).toHaveBeenCalled();
    expect(component.getCouncilGroupsResult).toHaveBeenCalled();

  });
  it('getCouncilGroups() should getState()(service)', () => {

    const service = fixture.debugElement.injector.get(CouncilGroupService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getStateSpy = spyOn(service, 'getCouncilGroups').and.returnValue(
      Observable.throw(fakeRes)
    );
    const getCouncilGroupsResultSpy = spyOn(component, 'getCouncilGroupsResult');

    fixture.detectChanges();

    component.getCouncilGroups();

    expect(service.getCouncilGroups).toHaveBeenCalled();
    expect(mockAlert.error).toHaveBeenCalledWith('Erro no servidor, tente novamente!');


  });

  it('sendNotification() should getCodMembers(service)', () => {

    const service = fixture.debugElement.injector.get(CouncilGroupService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getStateSpy = spyOn(service, 'getMembersCouncilGroup').and.returnValue(
      Observable.of(fakeRes)
    );
    const getCodMembersSpy = spyOn(component, 'getCodMembers');

    fixture.detectChanges();

    component.sendNotification();

    expect(service.getMembersCouncilGroup).toHaveBeenCalled();
    expect(component.getCodMembers).toHaveBeenCalled();

  });

  it('sendNotification() should alertService erro', () => {

    const service = fixture.debugElement.injector.get(CouncilGroupService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getStateSpy = spyOn(service, 'getMembersCouncilGroup').and.returnValue(
      Observable.throw(fakeRes)
    );

    fixture.detectChanges();

    component.sendNotification();

    expect(mockAlert.error).toHaveBeenCalledWith('Erro no servidor, tente novamente!');


  });


  it('sendNotification() should getCodMembers(service)', () => {
    component.foundPresident = false;
    component.go = true;

    const service = fixture.debugElement.injector.get(CouncilGroupService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getStateSpy = spyOn(service, 'getMembersCouncilGroup').and.returnValue(
      Observable.of(fakeRes)
    );
    const getCodMembersSpy = spyOn(component, 'getCodMembers');

    fixture.detectChanges();

    component.sendNotification();

    expect(service.getMembersCouncilGroup).toHaveBeenCalled();
    expect(component.getCodMembers).toHaveBeenCalled();

    expect(mockAlert.error).toHaveBeenCalledWith('Não existe presidente para o conselho escolhido!');

  });

});
