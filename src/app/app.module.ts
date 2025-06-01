import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JLeagueComponent } from './jleague/jleague.component';
import { HeaderJleagueComponent } from './components/header-jleague/header-jleague.component';
import { JleagueModule } from './jleague/jleague.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        JleagueModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
