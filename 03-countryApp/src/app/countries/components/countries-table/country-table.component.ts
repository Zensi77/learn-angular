import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];
  @Input() isLoading!: boolean;
}
