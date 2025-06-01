import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class LanguajeService {
  cookie = inject(SsrCookieService);
  translate = inject(TranslateService);

  currentLanguage = signal('');

  httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (
    http: HttpClient
  ) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

  changeLanguage(language: string) {
    this.cookie.set('language', language);

    this.translate.setDefaultLang(language);
    this.translate.use(language);

    this.currentLanguage.set(language);

    console.log(this.cookie.get('language'));
  }
}
