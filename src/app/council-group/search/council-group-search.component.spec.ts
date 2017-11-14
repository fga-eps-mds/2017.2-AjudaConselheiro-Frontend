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

  beforeEach(async(() => {
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
        AlertService,
        CouncilGroupService
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

  // it('should return an molded string following the template CAE-STATE-CITY', () => {
  //   const expected = 'CAE-DF-Brasília';

  //   component.state = '1';
  //   component.city = 'Brasília';
  //   component.states = [{ id: '1', sigla: 'DF'}, {id: '2', sigla: 'GO'}];

  //   expect(component.getCAEName()).toEqual(expected);
  // });

  // it('should split a council attributes given the pattern', () => {
  //   const city = 'Brasília';
  //   const state = 'DF';
  //   const description = 'CAE-DF-Brasília';
  //   const object = { descricao: 'CAE-DF-Brasília'};

  //   component.council = new CouncilGroup();
  //   component.dismemberCouncilAttributes(object);

  //   expect(component.council.descricao).toEqual(description);
  //   expect(component.council.estado).toEqual(state);
  //   expect(component.council.municipio).toEqual(city);
  // });
});
