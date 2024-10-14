import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'shorBy',
})
export class shorByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof Hero | ''): Hero[] {
    switch (sortBy) {
      case 'name':
        return value.sort((a, b) => (a.name > b.name ? 1 : -1)); // 1 Lo ponemos en la primera posición
      case 'canFly':
        return value.sort(
          (a, b) => (a.canFly === b.canFly ? 0 : a.canFly ? -1 : 1) // Si los dos pueden volar, los dejamos en la misma posición, si el primero puede volar, lo ponemos en la primera posición
        );
      case 'color':
        return value.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return value;
    }
  }
}
