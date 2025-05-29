import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderJleagueComponent } from './header-jleague/header-jleague.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { TableLeagueComponent } from './table-league/table-league.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { VideoNewsComponent } from './video-news/video-news.component';
import { ClientsPartnersComponent } from './clients-partners/clients-partners.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderJleagueComponent,
    UpcomingEventsComponent,
    TableLeagueComponent,
    OurServicesComponent,
    VideoNewsComponent,
    ClientsPartnersComponent,
    FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderJleagueComponent,
    UpcomingEventsComponent,
    TableLeagueComponent,
    OurServicesComponent,
    VideoNewsComponent,
    ClientsPartnersComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
