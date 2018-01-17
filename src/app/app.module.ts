import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';

import {PrettySizeModule} from './prettysize/pretty-size.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrettySizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
