import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderJleagueComponent } from './header-jleague/header-jleague.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { TableLeagueComponent } from './table-league/table-league.component';
import { OurServicesComponent } from './our-services/our-services.component';


@NgModule({
  declarations: [
    HeaderJleagueComponent,
    UpcomingEventsComponent,
    TableLeagueComponent,
    OurServicesComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderJleagueComponent,
    UpcomingEventsComponent,
    TableLeagueComponent,
    OurServicesComponent
  ]
})
export class ComponentsModule { }
