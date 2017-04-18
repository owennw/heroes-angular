import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import Hero from './hero'
import HeroService from './hero.service'

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export default class Heroes implements OnInit {
  heroes: Hero[]
  selectedHero: Hero

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  add(name: string): void {
    name = name.trim()
    if (!name) {
      return
    }

    this.heroService.create(name)
      .then((hero: Hero) => {
        this.heroes.push(hero)
        this.selectedHero = null
      })
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
