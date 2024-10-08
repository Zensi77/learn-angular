import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'; // Para generar un id único

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  //! Los arrays se pasan por referencia, por lo que si se modifica en este servicio, se modificará en todos los componentes que lo usen
  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  public addCharacter(character: Character): void {
    character.id = uuid();
    this.characters.push(character);
  }

  public onDeleteCharacter(index: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== index
    );
  }
}
