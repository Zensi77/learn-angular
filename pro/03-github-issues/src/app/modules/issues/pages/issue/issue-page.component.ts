import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/Issue.service';
import { IssueCommentComponent } from '../../components/issueComment/issueComment.component';

@Component({
  selector: 'app-issue-page',
  imports: [RouterLink, IssueCommentComponent],
  templateUrl: './issue-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuePageComponent {
  route = inject(ActivatedRoute);
  private readonly issueService = inject(IssueService);

  issueNumber = toSignal(
    this.route.params.pipe(
      map((params) => params['number'] ?? ''),
      tap((number) => this.issueService.setIssueNumber(number))
    )
  );

  issueQuery = this.issueService.issueQuery;
  issueComments = this.issueService.commentsIssueQuery;
}
