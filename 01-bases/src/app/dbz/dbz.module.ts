import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Lo importo en el modulo, para que esté disponible en todos los componentes que pertenecen a este módulo
//* Todo lo que sea importar modulos, se hace en el archivo del módulo

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character/add-character.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
