import {ModuleWithProviders, NgModule, Provider} from '@angular/core';

import {PrettySizeOptions} from './pretty-size-options';
import {PrettySizeService} from './pretty-size.service';
import {PrettySizeComponent} from './pretty-size.component';
import {PrettySizePipe} from './pretty-size.pipe';

export const initialPrettySizeOptions: Provider = {
  provide: PrettySizeOptions,
  useValue: {
    units: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    divisor: 1000,
    scale: 1,
  },
};

@NgModule({
  imports: [],
  declarations: [
    PrettySizePipe,
    PrettySizeComponent
  ],
  exports: [
    PrettySizePipe,
    PrettySizeComponent
  ],
  providers: [
    PrettySizeOptions,
    PrettySizeService
  ]
})

export class PrettySizeModule {
  static forRoot(prettySizeOptions?: Provider): ModuleWithProviders {
    return {
      ngModule: PrettySizeModule,
      providers: [
        PrettySizeService,
        prettySizeOptions || initialPrettySizeOptions,
      ],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: PrettySizeModule,
    };
  }
}
