import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssueByNumber } from '../actions/get-issue-by-number.actions';
import { getIssueComments } from '../actions/get-issue-comments.action';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issueNumber = signal<string>('');

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()),
    enabled: this.issueNumber() !== '',
  }));

  commentsIssueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssueComments(this.issueNumber()),
    enabled: this.issueNumber() !== '',
  }));

  setIssueNumber(number: string) {
    this.issueNumber.set(number);
  }
}
