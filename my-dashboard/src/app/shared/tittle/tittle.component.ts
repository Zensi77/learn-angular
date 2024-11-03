import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tittle',
  standalone: true,
  imports: [],
  template: `<h1>{{ title }}</h1>`,
  styles: ``,
})
export class TittleComponent {
  @Input({ required = true }) title!: string;
}
