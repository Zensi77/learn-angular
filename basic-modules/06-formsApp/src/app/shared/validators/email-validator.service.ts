import { Injectable, Pipe } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { delay, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    // control es el control que se va a validar
    const email = control.value;
    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        if (email === 'prueba@gmail.com') {
          subscriber.next({ emailExists: true }); // next es el valor que se va a retornar en el observable
          subscriber.complete(); // se completa el observable para que no siga escuchando
        }
        subscriber.next(null); // si no hay errores se retorna null
        subscriber.complete();
      }
    ).pipe(delay(3000)); // se simula un delay de 3 segundos

    return httpCallObservable;
  }

  /* Con llamada a un servicio
        return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`).subscribe(
          (resp) => {
            resp.length === 0 ? null : { emailExists: true };
        });


    */
}
