import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubIssue, State } from '../../interfaces/github-issue.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'issue-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './issue-item.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItemComponent {
  issue = input.required<GithubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }
}
