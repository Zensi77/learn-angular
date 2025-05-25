import { Component, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../service/Countries.service';
import { Country } from '../../interfaces/countries.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  @Output() isLoading: boolean = false;
  @Output() selectedRegion: Region = 'europe';
  countriesList: Country[] = [];
  regions: Region[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  constructor(private CountriesService: CountriesService) {}

  ngOnInit(): void {
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.term;
    this.countriesList = this.CountriesService.cacheStore.byRegion.countries;
    if (this.selectedRegion === 'europe') this.searchByRegion('europe');
  }

  searchByRegion(termino: Region) {
    this.selectedRegion = termino;
    this.isLoading = true;
    this.CountriesService.searchRegion(termino).subscribe((countries) => {
      this.countriesList = countries;
      this.isLoading = false;
    });
  }
}
