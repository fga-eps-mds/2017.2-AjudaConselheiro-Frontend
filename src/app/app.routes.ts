import { Routes} from '@angular/router';

import { SchedulingVisitComponent } from './scheduling/scheduling-visit/scheduling-visit.component';
import { SchedulingComponent } from './scheduling/scheduling-meeting/scheduling-meeting.component';
import { SchedulingHomeComponent } from './scheduling/scheduling-home/scheduling-home.component';



export const ROUTES: Routes = [
    {path: 'agendamento/reuniao', component: SchedulingComponent},
    {path: 'agendamento', component: SchedulingHomeComponent},
    {path: 'agendamento/visita', component: SchedulingVisitComponent}
  ];
