import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { IssuesService } from '../../services/Issues.service';
import { CommonModule } from '@angular/common';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';
import { State } from '../../interfaces/github-issue.interface';

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

  selectedState = computed(() => this.issueService.selectedState());

  get labelsQuery() {
    return this.issueService.labelsQuery;
  }

  get issuesQuery() {
    return this.issueService.issuesQuery;
  }

  onChangeState(newState: string) {
    // Es como un switch, pero con un objeto
    const state =
      {
        all: State.All,
        open: State.Open,
        closed: State.Closed,
      }[newState] ?? State.All;

    this.issueService.setSelectedState(state);
  }
}
