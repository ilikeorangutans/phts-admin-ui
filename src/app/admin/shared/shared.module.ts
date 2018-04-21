import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { OverlayComponent } from './overlay/overlay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpinnerComponent,
    OverlayComponent
  ],
  exports: [
    SpinnerComponent,
    OverlayComponent
  ]
})
export class SharedModule { }
