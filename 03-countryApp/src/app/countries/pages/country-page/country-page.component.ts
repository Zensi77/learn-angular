import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../service/Countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  country?: Country;

  ngOnInit(): void {
    // Lo que hago aqui es escuchar los cambios de los parametros de la url
    // Cuando cambie el parametro de la url, se ejecutara el switchMap para cambiar el observable de tipo params por el observable de tipo country
    // y al cambiarlo ya puedo llamar al servicio de countriesService para buscar el pais por el codigo alpha
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countriesService.searchByCodeAlpha(id)))
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        return (this.country = country);
      });
  }
}
