import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.css'],
})
export class SidebarComponent {
  constructor(private GifsService: GifsService) {}

  get tags(): string[] {
    return this.GifsService.historial;
  }

  searchWithSidebar(tag: string): void {
    this.GifsService.searchTag(tag);
  }
}
