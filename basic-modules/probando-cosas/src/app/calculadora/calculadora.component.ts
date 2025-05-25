import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  res: number = 0;
  operacion: string = '+';

  calculadora(): void {
    console.log(this.operacion);
    switch (this.operacion) {
      case '+':
        this.res = this.num1 + this.num2;
        break;
      case '-':
        this.res = this.num1 - this.num2;
        break;
      case '*':
        this.res = this.num1 * this.num2;
        break;
      case '/':
        this.res = this.num1 / this.num2;
        break;
    }
  }
}
