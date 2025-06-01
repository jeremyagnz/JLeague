import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-table-league',
    templateUrl: './table-league.component.html',
    styleUrls: ['./table-league.component.scss'],
     standalone: true,
  imports: [CommonModule, RouterModule],
})
export class TableLeagueComponent {

}
