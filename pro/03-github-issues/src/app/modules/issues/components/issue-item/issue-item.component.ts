import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { GithubIssue, State } from '../../interfaces/github-issue.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IssueService } from '../../services/Issue.service';

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
  private readonly issueService = inject(IssueService);
  issue = input.required<GithubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }

  prefetchIssue() {
    // this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.setIssueData(this.issue());
  }
}
