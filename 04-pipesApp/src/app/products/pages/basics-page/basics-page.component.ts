import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  nameLower: string = 'jose';
  nameUpper: string = 'JOSE';
  nameComplete: string = 'jOsE aNtOnIo';

  customDate: Date = new Date(); // Hora actual
}
