import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JLeagueComponent } from './jleague/jleague.component';
import { HeaderJleagueComponent } from './components/header-jleague/header-jleague.component';
import { JleagueModule } from './jleague/jleague.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JleagueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
