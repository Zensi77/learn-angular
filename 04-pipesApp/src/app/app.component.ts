import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    // Establezco globalmente el efecto de onda en los componentes de PrimeNG
    this.primengConfig.ripple = true;
  }
  title = 'pipesApp';
}
