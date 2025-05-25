import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: false,

  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  public counter = signal(0);
  public squareCounter = computed(() => this.counter() ** 2);
  // Un metodo computado lo que hace es que se ejecuta cada vez que el valor de counter cambia, es de solo lectura

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
