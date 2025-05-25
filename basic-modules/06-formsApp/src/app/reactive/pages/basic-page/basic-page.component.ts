import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent implements OnInit {
  /*
  myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(),
    stock: new FormControl(),
  });
  */

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0.1)]],
    stock: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  isValid(field: string): boolean {
    // Validar si el campo es valido
    const validateField = this.myForm.controls[field]; // Obtener el campo

    return validateField.errors && validateField.touched ? true : false;
  }

  message(field: string) {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || null; // Obtener errores del campo
    if (!errors) return '';

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';
        case 'minlength':
          return `El campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El valor mínimo es ${errors['min'].min}`;
      }
    }

    return '';
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar errores
      return;
    }

    this.myForm.reset({ price: 0, stock: 0 }); // Reset form cuando sea enviado
  }
}
