import { LibTestModule } from 'lib-test';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
