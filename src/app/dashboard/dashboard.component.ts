import { Component, OnInit } from '@angular/core'

import Hero from '../heroes/hero'
import HeroService from '../heroes/hero.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
})

export default class Dashboard implements OnInit {
  heroes: Hero[] = []

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5))
  }
}
