import { Component } from '@angular/core';

import { CouncilGroup } from '../models';

// Component Decorator
@Component({
  selector: 'app-council-group',
  templateUrl: './council-group.component.html',
  styleUrls: ['./council-group.component.css']
})

// Component Class
export class CouncilGroupComponent {
  title = 'app works!';
}
