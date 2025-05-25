import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component'),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-page.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-pages.component'),
  },
  {
    path: '**',
    redirectTo: 'contact',
  },
];
