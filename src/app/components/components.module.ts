import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderJleagueComponent } from './header-jleague/header-jleague.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { TableLeagueComponent } from './table-league/table-league.component';


@NgModule({
  declarations: [
    HeaderJleagueComponent,
    UpcomingEventsComponent,
    TableLeagueComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderJleagueComponent,
    UpcomingEventsComponent,
    TableLeagueComponent
  ]
})
export class ComponentsModule { }
