import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent], // En declarations se meten los componentes
  imports: [BrowserModule, AppRoutingModule, CounterModule, HeroesModule], // En imports se meten los modulos
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
