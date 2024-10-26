import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  constructor(
    private fb: FormBuilder,
    private validator: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}

  public myForm = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validator.firstNameAndLastNamePattern),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.validator.emailPattern)], // se llama asi por optimizacion, ya que al inyectar el servicio ya se referencia a la propiedad
      ],
      username: [
        '',
        [Validators.required, this.validator.cantBeStrider],
        [this.emailValidator],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
    }, // Aqui se pueden agregar validaciones a nivel de grupo del formulario
    {
      validators: this.validator.isFieldEquals('password', 'password2'),
    }
  );

  isValidField(field: string) {
    return this.validator.isValidField(field, this.myForm);
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
