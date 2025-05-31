import { Component, input, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-jer-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './jer-side-menu.component.html',
  styles: ``,
})
export class JerSideMenuComponent {
  isAuthenticated = input(false);

  titleColor = input<TitleColor>(TitleColor.purple);

  onSignIn = output();
  onSignOut = output();
}
