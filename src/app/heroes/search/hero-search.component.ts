import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import HeroSearchService from './hero-search.service'
import Hero from '../hero'

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ],
  providers: [ HeroSearchService ],
})

export default class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>
  private searchTerms = new Subject<string>()

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
      .catch(e => {
        console.log(e)
        return Observable.of<Hero[]>([])
      })
  }

  search(term: string): void {
    this.searchTerms.next(term)
  }

  gotoDetail(hero: Hero): void {
    this.router.navigate(['/detail', hero.id])
  }
}
