import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IssuesService } from '../../services/Issues.service';
import { CommonModule } from '@angular/common';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';

@Component({
  selector: 'app-issues-list-page',
  imports: [CommonModule, LabelsSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuesListPageComponent {
  issueService = inject(IssuesService);

  get labelsQuery() {
    return this.issueService.labelsQuery;
  }

  get issuesQuery() {
    return this.issueService.issuesQuery;
  }
}
