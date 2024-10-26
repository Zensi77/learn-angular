import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: ``,
})
export class SwitchesPageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  person = {
    gender: 'M',
    notifications: true,
  };

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  isValid(field: string): boolean | null {
    // Validar si el campo es valido

    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  message(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || null; // Obtener errores del campo
    if (!errors) return '';

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';
        case 'requiredTrue':
          return 'Debe aceptar los términos y condiciones';
      }
    }

    return '';
  }

  onSave() {
    if (!this.myForm.valid) this.myForm.markAllAsTouched();

    const { thermsAndConditions, ...newPerson } = this.myForm.value; // Extraigo por un lado los términos y condiciones y por otro el resto de los datos
    this.person = newPerson;
  }
}
