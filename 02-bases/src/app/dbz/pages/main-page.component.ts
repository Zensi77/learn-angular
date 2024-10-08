import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // Inyectamos el servicio en el constructor
  constructor(private DbzService: DbzService) {} // Los servicios se declaran como privados para que no se puedan modificar desde fuera
  get characters(): Character[] {
    return [...this.DbzService.characters]; // Hacemos una copia del array para que no se modifique el original
  }

  onDeletedCharacter(index: string): void {
    this.DbzService.onDeleteCharacter(index);
  }

  onNewCharacter(character: Character): void {
    this.DbzService.addCharacter(character);
  }
}
