import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-skeleton',
  imports: [],
  templateUrl: './pokemon-list-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListSkeletonComponent {}
