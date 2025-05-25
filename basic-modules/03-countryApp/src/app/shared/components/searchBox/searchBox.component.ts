import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() placeholder: string = 'Search...';
  @Input() initialValue: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  private debauncerSubscription?: Subscription;
  private debauncer: Subject<string> = new Subject(); // Esto es un observable que se va a encargar de emitir el valor que se esta escribiendo en el input

  ngOnInit(): void {
    this.debauncerSubscription = this.debauncer
      .pipe(
        debounceTime(300) // Se va a esperar 300 milisegundos para emitir el valor
      )
      .subscribe((searchTerm: string) => {
        this.onSearch.emit(searchTerm);
      });
  }

  ngOnDestroy(): void {
    this.debauncerSubscription?.unsubscribe(); // Se va a desuscribir del observable cuando el componente se destruya
    // No es necesario hacerlo para los observables que se crean en el servicio porque Angular se encarga de hacerlo
  }

  // emitValue(value: string) {
  //   this.onSearch.emit(value);
  // }

  onKeyPress(searchTerm: string) {
    this.debauncer.next(searchTerm);
  }
}
