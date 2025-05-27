import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Pokemon } from '../../pokemones/interfaces/pokemon.interface';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../pokemones/services/pokemons.service';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-page',
  imports: [CommonModule],
  templateUrl: './pokemon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  private readonly _pokemonService = inject(PokemonsService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  pokemon = signal<Pokemon | null>(null);

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this._pokemonService
          .loadPokemon(id)
          .pipe(
            tap((poke) => {
              this.title.setTitle(`Pokémon: ${poke.name}`);
              this.meta.updateTag({
                name: 'description',
                content: `Details about Pokémon ${poke.name}`,
              });
              this.meta.updateTag({
                name: 'og:title',
                content: `Pokémon: ${poke.name}`,
              });
              this.meta.updateTag({
                name: 'keywords',
                content: `Pokémon, ${poke.name}, details`,
              });
              this.meta.updateTag({
                name: 'og:image',
                content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`,
              });
            })
          )
          .subscribe(this.pokemon.set);
      }
    });
  }
}
