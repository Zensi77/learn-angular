import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  standalone: false,

  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'User Info', route: 'user-info' },
    { title: 'Properties', route: 'properties' },
  ]);

  //public menuItems: MenuItem[] = [
  //  { title: 'Contador', route: 'counter' },
  //  { title: 'User Info', route: 'user-info' },
  //  { title: 'Properties', route: 'properties' },
  //];
}
