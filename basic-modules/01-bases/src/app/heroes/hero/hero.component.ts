import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 35;

  get capitalizedName(): string {
    //! Los Getters se ven como propiedades
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    const newName = prompt('Enter the new name');
    this.name = newName !== null && newName !== '' ? newName : this.name;
  }

  changeAge(): void {
    this.age = Number(prompt('Enter the new age'));
  }
}
