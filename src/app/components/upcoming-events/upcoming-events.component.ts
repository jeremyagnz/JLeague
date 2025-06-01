import { Component } from '@angular/core';

@Component({
    selector: 'app-upcoming-events',
    templateUrl: './upcoming-events.component.html',
    styleUrls: ['./upcoming-events.component.scss'],
    standalone: false
})
export class UpcomingEventsComponent {

  cards = Array(4).fill(0);
}
