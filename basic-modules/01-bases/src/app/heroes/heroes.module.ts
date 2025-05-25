import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

//* Buenas practicas de importacion
//* 1. Angular
//* 2. Librerias de terceros
//* 3. Mis importaciones

@NgModule({
  declarations: [HeroComponent, ListComponent], //! Declaro los componentes
  exports: [HeroComponent, ListComponent], //! Exporto los componentes para que puedan ser usados en otros modulos
  imports: [CommonModule], //! Importo el modulo CommonModule para poder usar las directivas de angular
})
export class HeroesModule {
  //? Ahora este modulo se encuentra en el scope de heroes, me lo llevo al
  //? modulo principal y exporto los componentes para que se puedan usar en otros modulos
}
