import { Component, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../service/Countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent implements OnInit {
  @Output() isLoading: boolean = false;
  @Output() initalTerm: string = '';
  countriesList: Country[] = [];

  constructor(private CountriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesList = this.CountriesService.cacheStore.byCountry.countries;
    this.initalTerm = this.CountriesService.cacheStore.byCountry.term;
  }

  searchByPais(termino: string) {
    this.isLoading = true;
    this.CountriesService.searchCountry(termino).subscribe((countries) => {
      this.countriesList = countries;
      this.isLoading = false;
    });
  }
}
