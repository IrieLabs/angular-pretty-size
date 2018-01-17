import {NgModule} from '@angular/core';

import {PrettySizeComponent} from './pretty-size.component';
import {PrettySizeService} from './pretty-size.service';

@NgModule({
  imports: [],
  declarations: [
    // PrettySizeService,
    PrettySizeComponent
  ],
  exports: [
    // PrettySizeService,
    PrettySizeComponent
  ],
  providers: [
    PrettySizeService
  ]
})
export class PrettySizeModule {
}
