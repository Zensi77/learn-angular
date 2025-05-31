import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { LanguajeService } from '../../service/languaje.service';

@Component({
  selector: 'app-lenguaje-selector',
  imports: [],
  templateUrl: './lenguaje-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LenguajeSelectorComponent {
  private readonly _langService = inject(LanguajeService);
  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  onChangeLenguaje(event: Event) {
    const target = event.target as HTMLSelectElement;
    const leng = target.value;

    this._langService.changeLanguage(leng);
  }
}
