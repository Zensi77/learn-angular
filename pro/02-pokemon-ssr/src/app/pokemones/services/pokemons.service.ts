import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SimplePokemon } from '../interfaces/simple-pokemon.interface';
import { PokeAPIResp } from '../interfaces/pokemon-api-response.interface';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private _http = inject(HttpClient);

  loadPage(page: number): Observable<SimplePokemon[]> {
    if (page !== 0) --page;

    page = Math.max(page, 0);

    return this._http
      .get<PokeAPIResp>(
        `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`
      )
      .pipe(
        map((res) => {
          const pokemons: SimplePokemon[] = res.results.map((poke) => ({
            id: poke.url.split('/')[6] || '',
            name: poke.name,
          }));
          return pokemons;
        })
      );
  }

  loadPokemon(id: string) {
    return this._http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
