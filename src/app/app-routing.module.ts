import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JLeagueComponent } from './jleague/jleague.component';

const routes: Routes = [

{path: '', component:JLeagueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
