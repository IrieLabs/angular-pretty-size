import {Pipe, PipeTransform} from '@angular/core';

import {PrettySizeService} from './pretty-size.service';
@Pipe({
  name: 'nxtPrettySize',
})
export class PrettySizePipe implements PipeTransform {

  constructor(private prettySizeService: PrettySizeService,) {
  }

  transform(value: number): string {
    return this.prettySizeService.pretty(value);
  }
}
