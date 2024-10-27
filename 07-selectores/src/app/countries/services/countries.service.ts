import { Injectable } from '@angular/core';
import {
  Country,
  Region,
  Regions,
  smallCountry,
} from '../interfaces/country.intefaces';
import { combineLatest, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseURL: string = 'https://restcountries.com/v3.1';

  private _regiones: Regions[] = [
    Regions.Africa,
    Regions.Americas,
    Regions.Asia,
    Regions.Europe,
    Regions.Oceania,
  ];

  constructor(private http: HttpClient) {}

  get regions(): Regions[] {
    return [...this._regiones];
  }

  getCountriesByRegion(region: string | null): Observable<smallCountry[]> {
    if (!region) return of([]);
    console.log(region);
    const url = `${this.baseURL}/region/${region}?fields=name,cca3,borders`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) =>
        countries.map((country) => ({
          // cambio la respuesta de la petición de countries a un objeto de tipo smallCountry
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [], // If country.borders is null, return an empty array
        }))
      )
    );
  }

  getCountryByCode(code: string | null): Observable<smallCountry> {
    const url = `${this.baseURL}/alpha/${code}?fields=name,cca3,borders`;

    return this.http.get<Country>(url).pipe(
      map((country) => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))
    );
  }

  getCountryByCodes(borders: string[]): Observable<smallCountry[]> {
    if (!borders || borders.length === 0) return of([]);

    const countryRequests: Observable<smallCountry>[] = [];
    borders.forEach((code) => {
      countryRequests.push(this.getCountryByCode(code));
    });

    return combineLatest(countryRequests);
  }
}
