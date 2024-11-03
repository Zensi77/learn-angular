import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-side-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {
  menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path && !route.path.includes(':'));

  constructor() {
    //const dashboardRoutes = routes
    //  .map((route) => route.children ?? [])
    //  .flat()
    //  .filter((route) => route && route.path && !route.path.includes(':'));
  }
}
