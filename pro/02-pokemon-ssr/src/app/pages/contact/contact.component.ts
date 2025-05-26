import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact Page');

    this.meta.updateTag({
      name: 'description',
      content: 'Esta es la Contact Page',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'angular, contact, page, example',
    });
  }
}
