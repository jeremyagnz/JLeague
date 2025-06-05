import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AsideBarComponent } from '../shared/components/aside-bar/aside-bar.component';
import { MisTorneosComponent } from '../shared/components/Mis Torneos/mis-torneos.component';
import { JugadoresComponent } from '../shared/components/jugadores/jugadores.component';
import { EquiposComponent } from '../shared/components/equipos/equipos.component';
import { SettingsComponent } from '../shared/components/settings/settings.component';
import { MiEquipoComponent } from '../shared/components/mi-equipo/mi-equipo.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'mis-torneos',
        component: MisTorneosComponent,
      },
      {
        path: 'jugadores',
        component: JugadoresComponent,
      },
      {
        path: 'equipos',
        component: EquiposComponent,
      },
      {
        path: 'mi-equipo',
        component: MiEquipoComponent,
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
