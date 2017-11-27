import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CouncilGroupSearchComponent } from './council-group-search.component';
import { HttpModule, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CouncilGroupService, IbgeService, AlertService,
       UserService, ProfileService,
       AuthenticationService  } from '../../services/index';
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilGroupSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 fit('should create', () => {
    expect(component).toBeTruthy();
  });

 fit('should search council group', () => {
    component.councilGroup.municipio = undefined;
    component.searchCouncilGroup();

    component.councilGroup.municipio = 'Brasília';
    component.searchCouncilGroup();
  });

 fit('should has location', () => {
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

 fit('should chosen state', () => {
    component.councilGroup = fakeCouncil;
    // Testing the method when is passed valid state
    component.chosenState('52');
     // Testing the method when is passed invalid state
    component.chosenState(null);
    expect(mockAlert.warn).toHaveBeenCalledWith('Nenhum estado selecionado');

  });

 fit('should chosen city', () => {
    component.councilGroup = fakeCouncil;
    // Testing the method when is passed valid city
    component.chosenCity('Brasília');
     // Testing the method when is passed invalid city
    component.chosenCity(null);
    expect(mockAlert.warn).toHaveBeenCalledWith('Nenhuma cidade selecionada');

  });

 fit('Should know if user is logged in', () => {
    localStorage.setItem('token', 'appToken');

    let result;
    result = component.isLoggedIn();
    expect(result).toEqual(true);

    localStorage.clear();
    result = component.isLoggedIn();
    expect(result).toEqual(false);

  });


 fit('should filter council', () => {
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

 fit('should get state abbreviated', () => {
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

 fit('should get council groups', () => {
    const result = [council];

    component.description = 'CAE-27-Barra de Santo Antônio';
    component.getCouncilGroupsResult(result);

    component.foundCouncil = false;
    component.description = 'CAE-DF-Brasília';
    component.getCouncilGroupsResult(result);

  });


 fit('should get state abbreviated', () => {
    component.getStateAbbr();
  });


 fit('should get council grups', inject([CouncilGroupService], (service: CouncilGroupService) => {
    component.getCouncilGroups();
  }));

  fit('should open dialog', () => {
    component.openDialog();
  });

  fit('should close dialog', () => {
    component.closeDialog();
  });

  fit('should close dialog', () => {
    component.closeDialog();
  });

  fit('should get cod members', () => {

    component.getCodMembers(members);
    members = [];
    component.getCodMembers(members);
  });

  fit('should get presidente result', () => {
    const profile = {
      'camposAdicionais': 'Nada',
      'tipoPerfil': {
          'codTipoPerfil': 238,
          'descricao': 'Conselheiro'
      }
  };
    component.getPresResult(profile, '6417');
  });

  fit('should get cod members', () => {
    component.codGrupo = 643;
    component.go = true;
    component.sendNotification();
    component.codGrupo = null;
    component.sendNotification();
  });

  fit('should get presidente', () => {
    component.notification = null;
    component.send();
  });

});
