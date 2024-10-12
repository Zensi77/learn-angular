import { Component } from '@angular/core';
import { CountriesService } from '../../service/Countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  constructor(private CountriesService: CountriesService) {}

  countriesList: Country[] = [];

  searchByPais(termino: string) {
    this.CountriesService.searchCountry(termino).subscribe((countries) => {
      this.countriesList = countries;
    });
  }
}
