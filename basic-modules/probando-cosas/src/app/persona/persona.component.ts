import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
})
export class PersonaComponent {
  @Input() nombre!: string; // Indica que el valor de la variable nombre se va a recibir desde otro componente y que es requerido
  @Input('edad_criatura') edad: number = 0; // Indica que el valor de la variable edad se va a recibir desde otro componente, con el alias edad_criatura
  @Input() private pais: string = 'Spain';

  mensaje: string = '';
  titulo: string = '';
  titulo2: string = '';

  getPais(): string {
    return this.pais;
  }

  setPais(pais: string): void {
    this.pais = pais;
  }

  ngOnInit() {
    // Método que se ejecuta cuando el componente se inicializa
    if (this.nombre === undefined) {
      throw new Error('El nombre es requerido');
    }
  }

  /* Property binding  
     Esto se utiliza para enlazar una propiedad de un componente con una propiedad de un elemento HTML
  */
  deshabilitarBoton: boolean = false;

  /* Event binding
     Esto se utiliza para enlazar un evento de un elemento HTML con un método de un componente
  */
  agregarPersona(): void {
    if (this.mensaje.split('').length > 0) {
      this.deshabilitarBoton = true;
      this.mensaje = '';
      return;
    }
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(event: Event): void {
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}
