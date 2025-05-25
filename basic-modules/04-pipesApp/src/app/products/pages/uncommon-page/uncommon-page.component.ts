import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  name: string = 'Susana';
  gender: 'male' | 'female' = 'female';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeCliente() {
    this.name = 'Juan';
    this.gender = 'male';
  }

  // i18n Plural
  clients: string[] = ['Maria', 'Pedro', 'Juan', 'Susana', 'Luis'];
  clientsMap = {
    '=0': 'tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  person = {
    name: 'Juan',
    age: 30,
    address: 'Calle 123',
  };

  // Async Pipe
  myObservableTimer = interval(1000).pipe(
    // Crea un observable que emite un valor cada segundo, con los observables se desubscribe automaticamente
    tap((value) => console.log('Timer', value))
  );

  // Con promesas no se desubscribe automaticamente al resolver la promesa
  // por lo que aunque se cierre la pagina el observable sigue emitiendo valores
  myPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
