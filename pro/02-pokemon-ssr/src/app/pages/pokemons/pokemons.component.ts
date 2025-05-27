import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { PokemonListSkeletonComponent } from '../../pokemones/ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonsService } from '../../pokemones/services/pokemons.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { SimplePokemon } from '../../pokemones/interfaces/simple-pokemon.interface';
import PokemonListComponent from '../../pokemones/components/pokemon-list/pokemon-list.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons',
  imports: [PokemonListComponent, PokemonListSkeletonComponent, RouterLink],
  templateUrl: './pokemons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsComponent {
  //isLoading = signal(true);

  private readonly _pokeService = inject(PokemonsService);
  pokemons = signal<SimplePokemon[]>([]);

  private title = inject(Title);
  private route = inject(ActivatedRoute);
  currentPage = toSignal(
    this.route.params.pipe(
      map((params) => {
        let next = params['page'] ? +params['page'] : 1;
        next = isNaN(next) ? 1 : next;
        next = Math.max(1, next);
        return next;
      })
    )
  );

  loadOnPageChange = effect(() => {
    const next = this.currentPage()! - 1;
    this.loadPokemons(next);
  });

  private readonly appRef = inject(ApplicationRef);
  private $appRef = this.appRef.isStable.subscribe((isStable) => {
    console.log(`App is stable: ${isStable}`);
  });

  // Hace que se pre renderice la data en el servidor por lo que no es necesario hacer el skeleton
  // ya que la data ya viene precargada
  // ngOnInit(): void {
  //   this.route.params.subscribe((params) => {
  //     const next = params['next'] ? +params['next'] : 1;
  //     console.log('Next page:', next);
  //     this.loadPokemons(next);
  //   });
  //   this.loadPokemons();
  //
  //    this.isLoading.set(true);
  //   setTimeout(() => {
  //     this.isLoading.set(false);
  //   }, 2000);
  // }

  loadPokemons(next = 0) {
    const pageToLoad = this.currentPage()! + next;
    this._pokeService
      .loadPage(pageToLoad)
      .pipe(
        // tap(() => {
        //   this.router.navigate([], { queryParams: { page: pageToLoad } });
        // }),
        tap(() => this.title.setTitle(`Pokemons - Page ${this.currentPage()}`))
      )
      .subscribe((pokemons) => {
        this.pokemons.set(pokemons);
      });
  }
}
