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
        data: { titulo: 'Mis Torneos' },
      },
      {
        path: 'players',
        component: PlayersComponent,
        data: { titulo: 'Jugadores' },
      },
      {
        path: 'teams',
        component: TeamsComponent,
        data: { titulo: 'Equipos' },
      },
      {
        path: 'my-team',
        component: MyTeamComponent,
        data: { titulo: 'Mi Equipo' },
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: { titulo: 'Configuración' },
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
