import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent], // Exporto el componente para que pueda ser usado en otros modulos
})
export class CounterModule {
  //? Ahora este modulo se encuentra en el scope de counter, por lo que metere aqui todos los componentes que pertenezcan a counter y lo exportare
  //? para que se pueda usar en otros modulos y no llena el app.module de componentes
}
