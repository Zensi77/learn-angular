import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about-pages',
  imports: [],
  templateUrl: './about-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPagesComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About Pages');
    this.meta.updateTag({
      name: 'description',
      content: 'Esta es la About Pages',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'angular, about, pages, example',
    });
  }
}
