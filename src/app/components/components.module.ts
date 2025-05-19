import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderJleagueComponent } from './header-jleague/header-jleague.component';


@NgModule({
  declarations: [HeaderJleagueComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderJleagueComponent
  ]
})
export class ComponentsModule { }
