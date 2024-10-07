import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { Persona } from './Models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PersonaComponent,
    CalculadoraComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'probando-cosas';

  pruebas: boolean = false;
  calculadora: boolean = false;
  personas: boolean = true;

  personaInput: Persona = new Persona(); // Se inicializa como undefined para que no de error al compilar
  listaPersonas: Persona[] = [];

  verPruebas(): void {
    this.pruebas = !this.pruebas;
    this.calculadora = false;
    this.personas = false;
  }

  verCalculadora(): void {
    this.calculadora = !this.calculadora;
    this.pruebas = false;
    this.personas = false;
  }

  verPersonas(): void {
    this.personas = !this.personas;
    this.pruebas = false;
    this.calculadora = false;
  }

  submitUpPeople(): void {
    this.listaPersonas.push(this.personaInput);
    this.personaInput = new Persona(); // Se reinicializa el objeto para que no se quede con los valores anteriores
  }
}
