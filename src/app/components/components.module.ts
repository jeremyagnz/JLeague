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
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }
