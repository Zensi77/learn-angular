import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {
  reactiveMenu: MenuItem[] = [
    { text: 'Basicos', route: './reactive/basic' },
    { text: 'Dinamicos', route: './reactive/dinamic' },
    { text: 'Switches', route: './reactive/switches' },
  ];

  authMenu: MenuItem[] = [{ text: 'Registro', route: './auth/sign-up' }];
}
