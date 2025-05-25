import { Region } from './../interfaces/region.type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/countries.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiURL = 'https://restcountries.com/';

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  // CacheStore es un objeto que va a permitir almacenar los resultados de las busquedas y el termino de busqueda
  // Se coloca en el servicio para que sea unica instancia y no se pierda al cambiar de pagina
  cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { term: 'europe', countries: [] }, //region por defecto, podria en el enum poner '' y tomar por defecto el valor del enum
  };

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])) //Si pongo un tap debajo de este of([]) no se ejecuta, porque el observable ya termino devolviendo [] y si lo pongo arriba se ejecuta aunque haya un error
      // delay(2000) //delay: Permite simular un tiempo de espera en la respuesta del observable
    );
    // .pipe Es un operador que permite concatenar operadores de rxjs y se ejecutan en orden
    // catchError: Permite capturar un error y retornar un observable
    // Si hay un error, genero un observable con of para devolverlo vacio
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiURL}v3.1/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => {
        // tap: Permite realizar una accion secundaria sin modificar el flujo del observable (no modifica el flujo de datos, pero tiene acceso a los datos)
        this.cacheStore.byCapital = { term, countries }; // ES6: Si la propiedad y el valor tienen el mismo nombre, se puede omitir el valor
      }),
      tap(() => this.saveToLocalStorage()) // no lo pongo en el getCountriesRequest porque no quiero que se ejecute si hay un error
    );
  }

  searchCountry(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}v3.1/name/${termino}`;

    return this.getCountriesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byCountry = { term: termino, countries };
      }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchRegion(term: Region): Observable<Country[]> {
    const url = `${this.apiURL}v3.1/region/${term}`;

    return this.getCountriesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byRegion = { term, countries };
      }),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByCodeAlpha(id: string): Observable<Country | null> {
    const url = `${this.apiURL}v3.1/alpha/${id}`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)), //map permite transformar la respuesta del observable en otro valor (en este caso un country o null)
      catchError((err) => of(null))
    );
  }

  private saveToLocalStorage() {
    localStorage.setItem('cache', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (localStorage.getItem('cache')) {
      this.cacheStore = JSON.parse(localStorage.getItem('cache')!);
    }
  }
}
