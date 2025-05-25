import { CommonModule } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [CommonModule],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDoubleSize()',
    '[class.w-1/4]': '!isDoubleSize()',
    attribute: 'Hola',
    'data-testid': 'calculator-button',
  },
})
export class CalculatorButtonComponent {
  public isCommand = input(false, {
    transform: booleanAttribute,
    alias: 'isCommand',
  });

  public isDoubleSize = input(false, {
    transform: booleanAttribute,
    alias: 'isDoubleSize',
  });

  public onClick = output<string>();

  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  isPressed = signal(false);

  // Host Binding se usa para aplicar estilos condicionales según el estado del componente
  //@HostBinding('class.is-command') get commandStyle() {
  // return this.isCommand();
  //}

  // @HostBinding('class.w-2/4') get doubleSizeStyle() {
  //   return this.isDoubleSize();
  // }

  handleClick() {
    if (!this.contentValue()?.nativeElement) return;
    const value = this.contentValue()?.nativeElement.textContent?.trim();

    this.onClick.emit(value || '');
    this.keyboardPressStyle(value || '');
  }

  keyboardPressStyle(key: string) {
    if (!this.contentValue()) return;

    const value = this.contentValue()?.nativeElement.textContent?.trim();

    if (value === key) {
      this.isPressed.set(true);
      setTimeout(() => this.isPressed.set(false), 100);
    }
  }
}
