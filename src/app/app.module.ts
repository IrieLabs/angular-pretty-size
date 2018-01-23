import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {PrettySizeOptions} from './prettysize/pretty-size-options';
import {PrettySizeModule} from './prettysize/pretty-size.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrettySizeModule.forRoot({
      provide: PrettySizeOptions,
      useValue: {
        units: [' B', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'],
        divisor: 1000,
        scale: 1,
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
