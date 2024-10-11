import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent {
  @Input() placeholder: string = 'Search...';
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  emitValue(value: string) {
    this.onSearch.emit(value);
  }
}
