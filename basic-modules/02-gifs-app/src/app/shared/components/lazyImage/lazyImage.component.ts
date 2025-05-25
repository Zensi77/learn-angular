import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyImage',
  templateUrl: './lazyImage.component.html',
  styleUrls: ['./lazyImage.component.css'],
})
export class LazyImageComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';

  hasLoaded: boolean = false;

  constructor() {}

  ngOnInit() {
    if (!this.src) {
      throw new Error('Attribute src is required');
    }
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
