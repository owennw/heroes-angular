import { Injectable } from '@angular/core'

import Hero from './hero'
import HEROES from './heroes'

@Injectable()
export default class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES)
  }

  getHero(id: number) {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id))
  }
}
