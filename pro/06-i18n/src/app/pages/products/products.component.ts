import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LenguajeSelectorComponent } from '../../components/lenguaje-selector/lenguaje-selector.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LenguajeSelectorComponent, TranslateModule],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {}
