import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { AxControlComponent } from './kit/ax-control/ax-control.component';
import { ValidationComponent } from './kit/validation/validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AxControlComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
