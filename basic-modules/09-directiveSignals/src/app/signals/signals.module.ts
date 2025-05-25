import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { SignalsRoutingModule } from './signals-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    LayoutPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    CounterPageComponent,
    LayoutPageComponent,
    SideMenuComponent,
  ],
  imports: [CommonModule, RouterModule, SignalsRoutingModule],
})
export class SignalsModule {}
