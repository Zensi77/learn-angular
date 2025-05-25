import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from '../../../enviroments/enviroments';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root', // Define que este servicio esta disponible en toda la aplicacion inyectandolo en el modulo raiz
})
export class GifsService {
  public gifList: Gif[] = [];
  private _historial: string[] = [];

  private serviceURL = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; // Si no hay nada en el localstorage retorna un array vacio
    if (this._historial.length !== 0) this.searchTag(this.historial[0]);
  }

  get historial() {
    return [...this._historial]; // Retorna una copia del historial para no pasar la referencia directa
  }

  organizeHistory(tag: string): void {
    tag = tag.trim().toLowerCase();

    if (this._historial.includes(tag)) {
      this._historial = this._historial.filter((oldTag) => oldTag !== tag);
    }

    if (this._historial.length > 9) {
      this._historial.pop();
    }

    this._historial.unshift(tag);

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('historial', JSON.stringify(this._historial));
  }

  private loadLocalStorage(): void {}

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', enviroments.GYPHY_API_KEY)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get<SearchResponse>(
        `${this.serviceURL}/search?${params.toString()}` //
      )
      .subscribe((response: SearchResponse) => {
        this.gifList = response.data;
      });
  }
}
