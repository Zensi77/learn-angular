import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COnfiguracion del locale de la app
import localeEsES from '@angular/common/locales/es'; // Importar el locale
import localeFrCA from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsES); // Registrar el locale
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'es-ES' }, // Cambiar el locale de la app a español para los pipes
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
