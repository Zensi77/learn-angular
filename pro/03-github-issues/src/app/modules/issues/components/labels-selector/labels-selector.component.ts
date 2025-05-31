import { IssuesService } from './../../services/Issues.service';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
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
  private issuesService = inject(IssuesService);

  labels = input.required<GithubLabel[]>();

  isSelected(labelName: string) {
    return this.issuesService.selectedLabels().has(labelName);
  }

  onLabelClick(labelName: string) {
    this.issuesService.toggleLabel(labelName);
  }
}
