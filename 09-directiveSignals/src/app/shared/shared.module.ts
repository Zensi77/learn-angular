import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directivas/custom-label.directive';

@NgModule({
  declarations: [CustomLabelDirective],
  imports: [CommonModule],
  exports: [CustomLabelDirective],
  providers: [],
})
export class SharedModule {}
