import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { smallCountry } from '../../interfaces/country.intefaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``,
})
export class SelectorPageComponent implements OnInit {
  public countriesByRegion: smallCountry[] = [];
  public borders: smallCountry[] = [];

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }

  myForm = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],
  });

  get regiones() {
    // Hago referencia a la propiedad regions del servicio CountriesService
    return this.countriesService.regions;
  }

  private onRegionChange(): void {
    this.myForm
      .get('region')
      ?.valueChanges.pipe(
        tap(() => this.myForm.get('pais')!.setValue('')),
        switchMap((region) => {
          return this.countriesService.getCountriesByRegion(region);
        })
      )
      .subscribe((region) => {
        // Asigno el valor de la respuesta de getCountriesByRegion a countriesByRegion
        console.log(region);
        this.countriesByRegion = region;
      });
  }

  onCountryChange(): void {
    this.myForm
      .get('pais')
      ?.valueChanges.pipe(
        tap(() => {
          this.myForm.get('frontera')!.setValue('');
        }),
        filter(
          // Filtra la primera emisión de la respuesta de la petición para que no sea null y pete
          (value: string | null): value is string =>
            value !== null && value.length > 0
        ),
        switchMap((code: string) => {
          return this.countriesService.getCountryByCode(code);
        }),
        switchMap((country) => {
          return this.countriesService.getCountryByCodes(country.borders);
        })
      )
      .subscribe((countries) => {
        this.borders = countries;
      });
  }
}
