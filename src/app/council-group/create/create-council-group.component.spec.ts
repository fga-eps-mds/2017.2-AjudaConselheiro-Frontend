import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateCouncilGroupComponent } from './create-council-group.component';
import { AlertService, CouncilGroupService } from '../../services/index';
import { MockBackend } from '@angular/http/testing';

describe('CreateCouncilGroupComponent', () => {
  let mockAlert;
  let fixture: ComponentFixture<CreateCouncilGroupComponent>;
  let component: CreateCouncilGroupComponent;
  const fakeToken = 'FakeToken';
  const fakeLocation = 'fakeLocation';

  beforeEach(async(() => {
    mockAlert = {
      success: jasmine.createSpy('success'),
      warn: jasmine.createSpy('warn'),
      error: jasmine.createSpy('error')
    };
    TestBed.configureTestingModule({
      declarations: [CreateCouncilGroupComponent],
      imports: [
        HttpModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [AlertService,
        Http,
        CouncilGroupService,
        MockBackend,
        ConnectionBackend,
        {
          provide: AlertService,
          useValue: mockAlert
        },
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

    fixture = TestBed.createComponent(CreateCouncilGroupComponent);
    component = fixture.componentInstance;

  }));


  it('should result', () => {
    fixture.detectChanges();
    component.result(this.fakeLocation);
    expect(mockAlert.success).toHaveBeenCalledWith('Conselho criado com sucesso!');
  });

  it('should warn alert', () => {
    fixture.detectChanges();
    component.error(400);
    expect(mockAlert.warn).toHaveBeenCalledWith('Aviso: este conselho já está cadastrado no sistema!');
  });

  it('should error alert', () => {
    fixture.detectChanges();
    component.error(401);
    expect(mockAlert.error).toHaveBeenCalledWith('Erro: falha na comunicação com o sistema!');
  });

  it('should do isLoggedIn()', () => {
    localStorage.setItem('token', 'appToken');
    const result = component.isLoggedIn();
    const token = localStorage.getItem('token');
    expect(token).toEqual(token);
    expect(result).toEqual(true);
  });

});
