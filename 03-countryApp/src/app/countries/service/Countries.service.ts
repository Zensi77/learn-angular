import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  private apiURL = 'https://restcountries.com/';

  searchCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiURL}v3.1/capital/${capital}`;
    return this.http.get<Country[]>(url).pipe(catchError((err) => of([])));
    // .pipe Es un operador que permite concatenar operadores de rxjs y se ejecutan en orden
    // catchError: Permite capturar un error y retornar un observable
    // Si hay un error, genero un observable con of para devolverlo vacio
  }

  searchCountry(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}v3.1/name/${termino}`;

    return this.http.get<Country[]>(url).pipe(catchError((err) => of([])));
  }

  searchRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}v3.1/region/${termino}`;

    return this.http.get<Country[]>(url).pipe(catchError((err) => of([])));
  }

  searchByCodeAlpha(id: string): Observable<Country | null> {
    const url = `${this.apiURL}v3.1/alpha/${id}`;

    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)), //map permite transformar la respuesta del observable en otro valor (en este caso un country o null)
      catchError((err) => of(null))
    );
  }
}
