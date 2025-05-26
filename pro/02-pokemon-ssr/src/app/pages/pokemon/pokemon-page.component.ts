import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { SimplePokemon } from '../../pokemones/interfaces/simple-pokemon.interface';
import { Pokemon } from '../../pokemones/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  pokemon = signal<Pokemon | null>(null);
}
