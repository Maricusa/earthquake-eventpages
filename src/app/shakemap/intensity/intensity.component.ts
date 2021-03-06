import { Component } from '@angular/core';

import { EventService } from '../../core/event.service';

@Component({
  selector: 'shakemap-intensity',
  templateUrl: './intensity.component.html',
  styleUrls: ['./intensity.component.scss']
})
export class IntensityComponent {

  constructor (public eventService: EventService) { }

}
