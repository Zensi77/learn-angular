import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import PokemonListComponent from './pokemon-list.component';

const mockPokemons = [
  {
    id: '1',
    name: 'Bulbasaur',
  },
  {
    id: '2',
    name: 'Ivysaur',
  },
  {
    id: '3',
    name: 'Venusaur',
  },
];

describe('PokemonListComponent', () => {
  let fixture: ComponentFixture<PokemonListComponent>;
  let compiled: HTMLElement;
  let component: PokemonListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    fixture.componentRef.setInput('pokemons', mockPokemons);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render poke list with 3 cards of pokemones', () => {
    const cards = compiled.querySelectorAll('app-pokemon-card');
    expect(cards.length).toBe(mockPokemons.length);
  });

  it('should render no have pokemons', () => {
    fixture.componentRef.setInput('pokemons', []);
    fixture.detectChanges();

    const text = compiled.querySelector('p')?.textContent;

    expect(compiled.querySelectorAll('app-pokemon-card').length).toBe(0);
    expect(text).toBe('No Pokémon found.');
  });
});
