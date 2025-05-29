import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubIssue } from '../../interfaces/github-issue.interface';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'issue-comment',
  imports: [MarkdownModule],
  templateUrl: './issueComment.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueCommentComponent {
  issue = input.required<GithubIssue>();
}
