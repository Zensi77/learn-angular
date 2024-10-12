import { Component } from '@angular/core';
import { CountriesService } from '../../service/Countries.service';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  constructor(private CountriesService: CountriesService) {}

  countriesList: Country[] = [];

  searchByRegion(termino: string) {
    this.CountriesService.searchRegion(termino).subscribe((countries) => {
      this.countriesList = countries;
    });
  }
}
