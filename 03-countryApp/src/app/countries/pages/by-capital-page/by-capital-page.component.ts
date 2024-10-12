import { Component } from '@angular/core';
import { CountriesService } from '../../service/Countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  constructor(private countriesService: CountriesService) {}

  countriesList: Country[] = [];

  searchByCapital(termino: string) {
    this.countriesService.searchCapital(termino).subscribe((countries) => {
      this.countriesList = countries;
    });
  }
}
