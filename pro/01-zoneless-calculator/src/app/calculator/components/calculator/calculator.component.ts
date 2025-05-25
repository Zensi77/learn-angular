import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  viewChildren,
} from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@app/calculator/services/calculator.service';

@Component({
  selector: 'app-calculator',
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
})
export class CalculatorComponent {
  private readonly _calculatorService = inject(CalculatorService);

  resultText = computed(() => this._calculatorService.resultText());
  subResultText = computed(() => this._calculatorService.subResultText());
  lastOperation = computed(() => this._calculatorService.lastOperator());

  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  handleClick(value: string) {
    this._calculatorService.constructNumber(value);
  }

  //@HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key.toLowerCase();

    const keyEquivalents: Record<string, string> = {
      enter: '=',
      numpadenter: '=',
      escape: 'C',
      Clear: 'C',
      x: '*',
      '/': '÷',
    };

    this.handleClick(keyEquivalents[key] || key);

    this.calculatorButtons().forEach((button) => {
      button.keyboardPressStyle(keyEquivalents[key] || key);
    });
  }
}
