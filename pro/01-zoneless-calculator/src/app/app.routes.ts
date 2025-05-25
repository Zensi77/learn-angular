import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'calculator',
    loadComponent: () =>
      import('@app/calculator/views/calculator-page/calculator-page.component'),
  },
  {
    path: '**',
    redirectTo: 'calculator',
  },
];
