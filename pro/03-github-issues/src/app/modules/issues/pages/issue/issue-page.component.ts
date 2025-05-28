import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-issue-page',
  imports: [],
  templateUrl: './issue-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuePageComponent {}
