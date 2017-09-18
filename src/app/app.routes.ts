import { Routes} from '@angular/router';

import { SchedulingVisitComponent } from './scheduling-visit/scheduling-visit.component';
import { SchedulingComponent } from './scheduling/scheduling.component';



export const ROUTES: Routes = [
    {path: 'agendamento', component: SchedulingComponent},
    {path: 'agendamento/visita', component: SchedulingVisitComponent}
  ];

//PARA CRIAR SUA ROTA BASTA FAZER O Q FOI FEITO ACIMA
//path: e nome da sua rota exemplo localhost:4200/agendamento
//component: 'e o q vai aparecer la 
//<router-outlet></router-outlet> <--- isso aqui faz o resto pra vc no HTML principal
 
