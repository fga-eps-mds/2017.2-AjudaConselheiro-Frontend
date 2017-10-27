import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CouncilGroupService } from './council-group.service';
import { AlertService } from '../alert/alert.service';
import { CouncilGroup } from '../../models/index';


describe('CouncilGroupService', () => {
  let councilGroup: CouncilGroup;

  beforeEach(() => {
    councilGroup = new CouncilGroup;
    TestBed.configureTestingModule({
      providers: [CouncilGroupService, AlertService],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([CouncilGroupService], (service: CouncilGroupService) => {
    expect(service).toBeTruthy();
  }));

  it('should be createde', inject([CouncilGroupService], (service: CouncilGroupService) => {
    councilGroup.municipio = 'nada';
    councilGroup.estado = 'otonda';
    service.createCouncil(councilGroup);
    const temp = service.body;
    const teste = {
      'codAplicativo': 462,
      'codGrupoPai': 1,
      'codObjeto': councilGroup.codObjeto,
      'codTipoObjeto': 1,
      'descricao': 'CAE-nada-otonda'
    };
    expect(temp).toEqual(JSON.stringify(teste));
  }));
});
