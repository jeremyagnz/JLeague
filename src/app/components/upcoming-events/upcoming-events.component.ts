import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-upcoming-events',
    templateUrl: './upcoming-events.component.html',
    styleUrls: ['./upcoming-events.component.scss'],
     standalone: true,
  imports: [CommonModule, RouterModule],
})
export class UpcomingEventsComponent {

  cards = Array(4).fill(0);
}
