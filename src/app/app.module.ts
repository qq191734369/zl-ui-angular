import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayerModule } from './layer/layer.module';
import { TestComponent } from './test/test.component';
import { DialogModule } from './dialog/dialog.module';
import { ToastModule } from './toast/toast.module';
import { ButtonModule } from './button/button.module';
import { PagenationModule } from './pagenation/pagenation.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayerModule,
    DialogModule,
    ToastModule,
    ButtonModule,
    PagenationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
