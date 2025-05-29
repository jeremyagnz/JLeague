import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JLeagueComponent } from './jleague.component';
import { ComponentsModule } from '../components/components.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [JLeagueComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AuthModule
  ]
})
export class JleagueModule { }
