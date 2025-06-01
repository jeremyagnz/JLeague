import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JLeagueComponent } from './jleague.component';
import { AuthModule } from '../auth/auth.module';
import { HeaderJleagueComponent } from '../components/header-jleague/header-jleague.component';
import { ClientsPartnersComponent } from '../components/clients-partners/clients-partners.component';
import { FooterComponent } from '../components/footer/footer.component';
import { OurServicesComponent } from '../components/our-services/our-services.component';
import { TableLeagueComponent } from '../components/table-league/table-league.component';
import { UpcomingEventsComponent } from '../components/upcoming-events/upcoming-events.component';
import { VideoNewsComponent } from '../components/video-news/video-news.component';



@NgModule({
  declarations: [JLeagueComponent],
  imports: [
    CommonModule,
    AuthModule,
    HeaderJleagueComponent,
    ClientsPartnersComponent,
    FooterComponent,
    OurServicesComponent,
    TableLeagueComponent,
    UpcomingEventsComponent,
    VideoNewsComponent
  ]
})
export class JleagueModule { }
