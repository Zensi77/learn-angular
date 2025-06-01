import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LenguajeSelectorComponent } from '../../components/lenguaje-selector/lenguaje-selector.component';

@Component({
  selector: 'app-basic-plan',
  imports: [TranslateModule, LenguajeSelectorComponent],
  templateUrl: './basic-plan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPlanComponent {}
