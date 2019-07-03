import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZlMaskComponent } from './zl-mask/zl-mask.component';

@NgModule({
  declarations: [ZlMaskComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ZlMaskComponent
  ]
})
export class LayerModule { }
