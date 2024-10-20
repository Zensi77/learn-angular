import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { HeroesService } from '../../services/heroes.service';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit {
  constructor(
    private router: Router,
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    this.activatedRoute.params.subscribe(({ id }) => {
      this.heroesService.getHeroById(id).subscribe((hero) => {
        if (!hero) return this.router.navigate(['/']);

        this.heroForm.patchValue(hero); // PatchValue es una función de FormGroup que permite setear valores a los campos del formulario
        return;
      });
    });
  }

  heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics), // Default value
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  get currentHero(): Hero {
    return this.heroForm.value as Hero; // Casteo la salida de value a Hero
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackbar('Registro actualizado');
      });
      return;
    }

    this.heroesService.addHero(this.currentHero).subscribe((hero) => {
      this.showSnackbar('Registro creado');
      this.router.navigateByUrl('/');
    });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'Aceptar', {
      duration: 2500,
    });
  }

  onDeleteHero(): void {
    if (!this.currentHero.id)
      throw new Error('No se puede eliminar un héroe sin id');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result) => result), // Si el usuario cancela el dialogo, no se ejecuta el switchMap
        switchMap(() => this.heroesService.deleteHero(this.currentHero.id)), // Si acepta el dialogo, se ejecuta el deleteHero
        filter((wasDeleted) => wasDeleted) // Si el héroe no fue eliminado, no se ejecuta el subscribe
      )
      .subscribe(() => {
        this.router.navigate(['/']);
        this.showSnackbar('Registro eliminado');
      });
  }
}
