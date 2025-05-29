import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubLabel } from '../../interfaces/github-label.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issues-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsSelectorComponent {
  labels = input.required<GithubLabel[]>();
}
