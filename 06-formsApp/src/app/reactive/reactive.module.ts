import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DinamicPageComponent } from './pages/dinamic-page/dinamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    BasicPageComponent,
    DinamicPageComponent,
    RegisterPageComponent,
    SwitchesPageComponent,
  ],
  imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule],
})
export class ReactiveModule {}
