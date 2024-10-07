import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>El valor del contador es {{ counter }}</p>

    <div>
      <button (click)="changeCounter(1)">+1</button>
      <button (click)="changeCounter(-1)">-1</button>
      <button (click)="resetCounter()">Reset</button>
    </div> `,
  styles: [
    `
      button {
        display: block;
        width: 100px;
      }
    `,
  ],
})
export class CounterComponent {
  counter: number = 0;

  changeCounter(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
