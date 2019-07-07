import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZlToastComponent } from './zl-toast/zl-toast.component';

@NgModule({
  declarations: [ZlToastComponent],
  imports: [
    CommonModule
  ],
  exports: [ ZlToastComponent ]
})
export class ToastModule { }
