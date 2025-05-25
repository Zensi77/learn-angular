import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  firstNameAndLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
      return {
        cantBeStrider: true,
      };
    }
    return null;
  };

  isValidField(field: string, form: FormGroup) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  isFieldEquals(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      // se retorna una funcion que recibe el formGroup
      const value1 = formGroup.get(field1)?.value;
      const value2 = formGroup.get(field2)?.value;

      if (value1 !== value2) {
        formGroup.get(field2)?.setErrors({ noIguales: true });
        return { noIguales: true };
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    };
  }
}
