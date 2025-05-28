import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';
import { provideRouter } from '@angular/router';

const mockPokemon: SimplePokemon = {
  id: '1',
  name: 'Bulbasaur',
};

describe('PokemonCardComponent', () => {
  let fixture: ComponentFixture<PokemonCardComponent>;
  let compiled: HTMLElement;
  let component: PokemonCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    fixture.componentRef.setInput('pokemon', mockPokemon);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the Pokemon signal', () => {
    expect(component.pokemon()).toBe(mockPokemon);
  });

  it('should display the Pokemon name and image correctly', () => {
    const pokeName = compiled.querySelector('h2')?.textContent;

    const pokeImg = compiled.querySelector('img')?.getAttribute('src');
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${mockPokemon.id}.png`;

    expect(pokeName?.trim()).toBe(mockPokemon.name);
    expect(pokeImg).toBe(url);
  });

  it('should have the proper ng-reflect-router-link', () => {
    const divWithRouter = compiled.querySelector('div');

    const router = divWithRouter?.getAttribute('ng-reflect-router-link');

    expect(router).toBe(`/pokemon,${mockPokemon.name}`);
  });
});
