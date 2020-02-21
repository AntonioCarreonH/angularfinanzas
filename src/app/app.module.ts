import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NabvarComponent } from './components/commons/nabvar/nabvar.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
