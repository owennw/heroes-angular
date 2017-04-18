import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import AppRoutingModule from './app-routing.module'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { App } from './app.component'

import Heading from './heading.component'

import Heroes from './heroes/heroes.component'
import HeroDetail from './heroes/detail/hero-detail.component'
import HeroSearch from './heroes/search/hero-search.component'

import Dashboard from './dashboard/dashboard.component'

import HeroService from './heroes/hero.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [
    App,
    Heading,
    Heroes,
    Dashboard,
    HeroDetail,
    HeroSearch,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [
    App,
  ],
})

export class AppModule { }
