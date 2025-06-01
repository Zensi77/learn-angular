import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguajeService } from './service/languaje.service';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = '0-i18n';

  cookie = inject(SsrCookieService);
  languajeService = inject(LanguajeService);

  lang = effect(() => {
    console.log('Language changed:', this.languajeService.currentLanguage());
  });

  changeLanguage(language: string) {
    this.languajeService.changeLanguage(language);
  }
}
