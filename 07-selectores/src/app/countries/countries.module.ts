import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { RouterModule } from '@angular/router';
import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectorPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CountriesRoutingModule,
  ],
})
export class CountriesModule {}
