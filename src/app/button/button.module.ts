import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZlBtnComponent } from './zl-btn/zl-btn.component';

@NgModule({
  declarations: [ZlBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ZlBtnComponent
  ]
})
export class ButtonModule { }
