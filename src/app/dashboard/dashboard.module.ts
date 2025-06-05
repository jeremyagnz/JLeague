import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AsideBarComponent } from '../shared/components/aside-bar/aside-bar.component';
import { SettingsComponent } from '../shared/components/settings/settings.component';
import { TeamsComponent } from '../shared/components/teams/teams.component';
import { PlayersComponent } from '../shared/components/players/players.component';
import { MyTournamentsComponent } from '../shared/components/my-tournaments/my-tournaments.component';
import { MyTeamComponent } from '../shared/components/my-team/my-team.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'my-tournaments',
        component: MyTournamentsComponent,
      },
      {
        path: 'players',
        component: PlayersComponent,
      },
      {
        path: 'teams',
        component: TeamsComponent,
      },
      {
        path: 'my-team',
        component: MyTeamComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    AsideBarComponent,
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],

  exports: [DashboardComponent],
})
export class DashboardModule {}
