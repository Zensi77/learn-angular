import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  isUpperCase: boolean = false;
  orderBy: keyof Hero = 'name'; // Por defecto ordenamos por nombre
  heros: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: 2,
    },
    {
      name: 'Robin',
      canFly: false,
      color: 0,
    },
    {
      name: 'Flash',
      canFly: false,
      color: 5,
    },
  ];

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }
}
