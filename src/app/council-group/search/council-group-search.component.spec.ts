import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CouncilGroupSearchComponent } from './council-group-search.component';
import { HttpModule, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { AlertService } from '../../services/alert/alert.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CouncilGroupService } from '../../services/index';
import { State, CouncilGroup } from '../../models/index';
import { IbgeComponent } from '../../ibge/ibge.component';

describe('CouncilGroupSearchComponent', () => {
  let component: CouncilGroupSearchComponent;
  let fixture: ComponentFixture<CouncilGroupSearchComponent>;
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
        CouncilGroupSearchComponent,
        IbgeComponent
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule ],
      providers: [
        CouncilGroupService,
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

  it('should create', () => {
    expect(component).toBeTruthy();
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
    const council = {
    'descricao': 'CAE-27-Barra de Santo Antônio',
    'codGrupo': 1059,
    'codObjeto': 1510426954450
    };
    const result = [council];

    // Testing case where advice is found
    component.description = 'CAE-27-Barra de Santo Antônio';
    component.filterCouncil(result);
    expect(component.found).toBe(true);

    // Testing case where advice is not found
    component.found = false;
    component.description = 'CAE-DF-Brasília';
    component.filterCouncil(result);
    expect(component.found).toBe(false);

  });

});
