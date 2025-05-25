import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  standalone: false,

  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  counter = signal<number>(10);

  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  fullName = computed(
    // solo se ejecuta cuando cambia el valor COMPLETO de user y es de solo lectura
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  useChangedEffect = effect(() => {
    // Los efectos se ejecutan cada vez que cambia el valor de user o counter
    // Estos efectos se ejecutan de forma sincrona y tienen limpia automatica
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }

  onFieldUpdated(field: keyof User, value: string) {
    // this.user.update((current) => ({ ...current, [field]: value })); // Una forma de actualizar el valor de un campo en el objeto

    this.user.update((current) => {
      switch (field) {
        case 'email':
          return { ...current, email: value };
        case 'first_name':
          return { ...current, first_name: value };
        case 'last_name':
          return { ...current, last_name: value };
      }
      return current;
    });
  }
}
