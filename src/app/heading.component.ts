import { Component, Input } from '@angular/core'

@Component({
  selector: 'heading',
  template: '<h1>{{text}}</h1>',
  styles: [`
    h1 {
      color: #369;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 250%;
    }
  `]
})

export default class Heading {
  @Input() text: string
}
