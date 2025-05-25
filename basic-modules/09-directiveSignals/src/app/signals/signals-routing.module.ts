import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'counter', component: CounterPageComponent },
      { path: 'user-info', component: UserInfoPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', component: CounterPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}
