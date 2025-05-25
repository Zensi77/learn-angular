import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { ContactPageComponent } from './shared/pages/contactPage/contactPage.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  {
    path: 'countries',
    loadChildren: () =>
      // Carga de manera perezosa el módulo de países
      import('./countries/countries.module').then((m) => m.CountriesModule),
  },
  { path: '**', redirectTo: 'countries' }, // Cualquier otra ruta que no sea home o about, redirige a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Describe que es el router principal
  exports: [RouterModule],
})
export class AppRoutingModule {}
