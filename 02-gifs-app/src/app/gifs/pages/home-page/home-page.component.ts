import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private GifsService: GifsService) {} // Vamos a hacer uso aqui del servicio para facilitar el concepto de reutilizacion del componente card-list

  get gifs(): Gif[] {
    return this.GifsService.gifList;
  }
}
