import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamic-page',
  templateUrl: './dinamic-page.component.html',
  styles: ``,
})
export class DinamicPageComponent {
  constructor(private fb: FormBuilder) {}
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  });

  newFavorite: FormControl = this.fb.control('', Validators.required); // Crear un nuevo control para el nuevo favorito

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

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

  isValidFieldArray(formArray: FormArray, index: number): boolean {
    const validateField = formArray.controls[index]; // Saco el control del array en la posición index
    return validateField.errors && validateField.touched ? true : false;
  }

  onDeleteFavorites(index: number) {
    this.favoritesArr.removeAt(index);
  }

  addToFavorites() {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;

    this.favoritesArr.push(this.fb.control(newGame, Validators.required));
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.controls['favorites'] = new FormArray([]); // Limpiar el array de favoritos
    this.myForm.reset();
  }
}
