import { Routes} from '@angular/router';

import { SchedulingVisitComponent } from './scheduling/scheduling-visit/scheduling-visit.component';
import { SchedulingComponent } from './scheduling/scheduling-meeting/scheduling-meeting.component';



export const ROUTES: Routes = [
    {path: 'agendamento/reuniao', component: SchedulingComponent},
    {path: 'agendamento/visita', component: SchedulingVisitComponent}
  ];
