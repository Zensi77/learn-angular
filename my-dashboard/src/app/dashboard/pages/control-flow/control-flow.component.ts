import { Component, signal } from '@angular/core';
import { TittleComponent } from '@shared/tittle/tittle.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [TittleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  showContent = signal(false);
  grade = signal<Grade>('F');

  readonly = signal(false).asReadonly(); // Computed signal

  frameworks = signal<string[]>(['Angular', 'React', 'Vue']);
  frameworks2 = signal<string[]>([]);

  toggleContent() {
    this.showContent.update((value) => !value);
  }
}
