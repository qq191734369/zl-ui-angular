import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZlPagenationComponent } from './zl-pagenation/zl-pagenation.component';

@NgModule({
  declarations: [ZlPagenationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ZlPagenationComponent
  ]
})
export class PagenationModule { }
