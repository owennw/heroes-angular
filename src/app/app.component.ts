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
  styleUrls: [ './app.component.css' ],
})

export class App {
  title = 'Hero Gallery'
}
