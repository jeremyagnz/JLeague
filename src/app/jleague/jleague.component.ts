import { Component } from '@angular/core';

@Component({
    selector: 'app-jleague',
    templateUrl: './jleague.component.html',
    styleUrls: ['./jleague.component.scss'],
    standalone: false
})
export class JLeagueComponent {

   scrollToTableLeague() {
    const element = document.getElementById('table-league-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
