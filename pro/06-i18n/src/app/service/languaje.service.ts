import { inject, Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root',
})
export class LanguajeService {
  cookie = inject(SsrCookieService);

  changeLanguage(language: string) {
    this.cookie.set('language', language);
  }
}
