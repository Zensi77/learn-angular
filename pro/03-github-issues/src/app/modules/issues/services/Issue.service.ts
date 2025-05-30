import { inject, Injectable, signal } from '@angular/core';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { getIssueByNumber } from '../actions/get-issue-by-number.actions';
import { getIssueComments } from '../actions/get-issue-comments.action';
import { GithubIssue } from '../interfaces/github-issue.interface';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issueNumber = signal<string>('');
  private queryClient = inject(QueryClient);

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()),
    enabled: this.issueNumber() !== '',
    staleTime: 1000 * 60 * 5, // 5 minutes
  }));

  commentsIssueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssueComments(this.issueNumber()),
    enabled: this.issueNumber() !== '',
  }));

  setIssueNumber(number: string) {
    this.issueNumber.set(number);
  }

  prefetchIssue(id: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['issue', id],
      queryFn: () => getIssueByNumber(id),
      staleTime: 1000 * 60 * 5, // 5 minutes
    });
  }

  setIssueData(issue: GithubIssue) {
    this.queryClient.setQueryData(['issue', issue.number.toString()], issue, {
      updatedAt: Date.now(),
    });
  }
}
