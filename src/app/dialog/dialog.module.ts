import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZlDialogComponent } from './zl-dialog/zl-dialog.component';
import { LayerModule } from '../layer/layer.module';

@NgModule({
  declarations: [ZlDialogComponent],
  imports: [
    CommonModule,
    LayerModule
  ],
  exports: [
    ZlDialogComponent
  ],
  entryComponents: [ZlDialogComponent]
})
export class DialogModule { }
