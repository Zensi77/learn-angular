import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app.routes';
import { Location } from '@angular/common';

describe('App routes', () => {
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should routes work correctly', async () => {
    await router.navigate(['/about']);

    expect(location.path()).toBe('/about');

    await router.navigate(['/pokemons/page/1']);

    expect(location.path()).toBe('/pokemons/page/1');

    await router.navigate(['/pokemon/1']);
    expect(location.path()).toBe('/pokemon/1');

    await router.navigate(['/pricing']);
    expect(location.path()).toBe('/pricing');

    await router.navigate(['/contact']);
    expect(location.path()).toBe('/contact');

    await router.navigate(['/non-existent']);
    expect(location.path()).toBe('/contact'); // Redirige a /contact por la ruta '**'
  });
});
