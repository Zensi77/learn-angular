import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'pokemon/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const TOTAL_POKEMONS = 10;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`
      );
      const data = await response.json();
      return data.results.map((pokemon: { name: string }) => ({
        id: pokemon.name,
      }));
    },
  },
  {
    path: 'pokemons/page/:page',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const TOTAL_PAGES = 10;
      return Array.from({ length: TOTAL_PAGES }, (_, i) => ({
        page: (i + 1).toString(),
      }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
