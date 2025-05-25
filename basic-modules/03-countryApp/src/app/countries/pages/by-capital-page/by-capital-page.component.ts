import { Component, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../service/Countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  @Output() isLoading: boolean = false;
  @Output() initialTerm: string = '';
  countriesList: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesList = this.countriesService.cacheStore.byCapital.countries;
    this.initialTerm = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(termino: string) {
    this.isLoading = true;
    this.countriesService.searchCapital(termino).subscribe((countries) => {
      this.countriesList = countries;
      this.isLoading = false;
    });
  }
}
