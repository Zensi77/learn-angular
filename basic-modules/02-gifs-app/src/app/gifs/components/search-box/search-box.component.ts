import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input
      type="text"
      placeholder="Buscar GIFs..."
      class="form-control"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput') // Pongo el nombre de la referencia local del HTML que quiero obtener
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) {}

  searchTag(): void {
    this.GifsService.searchTag(this.tagInput.nativeElement.value);

    this.tagInput.nativeElement.value = '';
  }
}
