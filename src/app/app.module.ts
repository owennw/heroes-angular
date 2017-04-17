import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import AppRoutingModule from './app-routing.module'

import { App } from './app.component'

import Heading from './heading.component'

import Heroes from './heroes/heroes.component'
import HeroDetail from './heroes/hero-detail.component'

import Dashboard from './dashboard/dashboard.component'

import HeroService from './heroes/hero.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    App,
    Heading,
    Heroes,
    Dashboard,
    HeroDetail,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [
    App,
  ],
})

export class AppModule { }
