import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  JerSideMenuComponent,
  TitleColor,
} from '../../../jer-side-menu/src/lib/jer-side-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JerSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jer-tedtbed-app';

  titleColor = TitleColor;

  isAuthenticated = signal(true);
}
