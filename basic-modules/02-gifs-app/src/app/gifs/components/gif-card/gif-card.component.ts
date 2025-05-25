import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-gif-card',
  templateUrl: './gif-card.component.html',
})
export class GifCardComponent implements OnInit {
  @Input() gif!: Gif;

  ngOnInit() {
    if (!this.gif) {
      throw new Error('GifCardComponent: gif is required');
    }
  }
}
