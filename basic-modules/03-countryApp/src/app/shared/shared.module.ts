import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoaderSpinnerComponent,
    SearchBoxComponent,
    SideBarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [SideBarComponent, SearchBoxComponent, LoaderSpinnerComponent],
})
export class SharedModule {}
