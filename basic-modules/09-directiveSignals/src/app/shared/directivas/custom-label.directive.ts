import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
  standalone: false,
})
export class CustomLabelDirective implements OnInit {
  private htmlELement?: ElementRef<HTMLElement>;
  private _color: string = 'red'; // _color es una convención para propiedades privadas
  private _errors?: ValidationErrors | null | undefined;

  @Input() set color(value: string) {
    // set color hace que el input sea un setter
    this._color = value;
    this.changeColor();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    console.log('errors', this._errors);
    this.setErrorMessage();
  }

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlELement = element;
  }

  ngOnInit(): void {
    console.log('this.htmlELement', this.htmlELement);
    this.changeColor();
  }

  changeColor() {
    if (!this.htmlELement) return;
    this.htmlELement.nativeElement.style.color = this._color;
  }

  setErrorMessage() {
    if (!this.htmlELement) return;

    if (!this._errors) {
      this.htmlELement.nativeElement.innerText = 'Sin errores';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlELement.nativeElement.innerText = 'Campo requerido';
      return;
    }

    if (errors.includes('minlength')) {
      this.htmlELement.nativeElement.innerText =
        'Mínimo 6 caracteres, te faltan ' +
        (this._errors['minlength'].requiredLength -
          this._errors['minlength'].actualLength);
      return;
    }

    if (errors.includes('email')) {
      this.htmlELement.nativeElement.innerText = 'Email inválido';
    }
  }
}
