import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'pricing-page',
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    console.log('Platform ID:', this.platform);

    if (this.platform === 'browser') {
      document.title = 'Pricing Page';
      console.log('Running in the browser environment');
    }

    // this.title.setTitle('Pricing Page');

    this.meta.updateTag({
      name: 'description',
      content: 'Esta es la Pricing Page',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'angular, pricing, page, example',
    });
  }
}
