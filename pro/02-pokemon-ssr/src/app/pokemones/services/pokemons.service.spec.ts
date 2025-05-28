import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonsService } from './pokemons.service';
import { provideHttpClient } from '@angular/common/http';
import { SimplePokemon } from '../interfaces/simple-pokemon.interface';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { catchError } from 'rxjs';

const expectedPokemons: SimplePokemon[] = [
  {
    id: '1',
    name: 'bulbasaur',
  },
  {
    id: '2',
    name: 'ivysaur',
  },
];

const pokeApiMockResponse = {
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
  ],
};

const mockPokemon = {
  id: '1',
  name: 'Bulbasaur',
};

describe('PokemonService', () => {
  let service: PokemonsService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    service = TestBed.inject(PokemonsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the component', () => {
    expect(service).toBeTruthy();
  });

  it('should load a page of simple pokemons', () => {
    service.loadPage(1).subscribe((pokes) => {
      expect(pokes).toEqual(expectedPokemons);
    });

    const req = httpMock.expectOne(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
    );

    expect(req.request.method).toBe('GET');

    req.flush(pokeApiMockResponse);
  });

  it('should load a page 5 of simple pokemons', () => {
    service.loadPage(5).subscribe((pokes) => {
      expect(pokes).toEqual(expectedPokemons);
    });

    const req = httpMock.expectOne(
      'https://pokeapi.co/api/v2/pokemon?offset=80&limit=20'
    );

    expect(req.request.method).toBe('GET');

    req.flush(pokeApiMockResponse);
  });

  it('should load a pokemon by ID', () => {
    service.loadPokemon('1').subscribe((poke: any) => {
      expect(poke).toEqual(mockPokemon);
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1');

    expect(req.request.method).toBe('GET');

    req.flush(mockPokemon);
  });

  it('should load a pokemon by name', () => {
    service.loadPokemon('bulvasur').subscribe((poke: any) => {
      expect(poke).toEqual(mockPokemon);
    });

    const req = httpMock.expectOne(
      'https://pokeapi.co/api/v2/pokemon/bulvasur'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockPokemon);
  });

  it('should catch error if pokemon not exists', () => {
    const name = 'yo-no-existo';

    service
      .loadPokemon(name)
      .pipe(
        catchError((err) => {
          expect(err.message).toContain('not found');
          return [];
        })
      )
      .subscribe();

    const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/${name}`);

    expect(req.request.method).toBe('GET');

    req.flush('not found', {
      status: 404,
      statusText: 'Not found',
    });
  });
});
