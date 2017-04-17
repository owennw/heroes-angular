import { Component } from '@angular/core'

@Component({
  selector: 'hero-app',
  template: `
    <heading [text]="title"></heading>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})

export class App {
  title = 'Hero Gallery'
}
