import {Injectable} from '@angular/core';
import {PrettySizeOptions} from './pretty-size-options';


@Injectable()
export class PrettySizeService {


  constructor(private options: PrettySizeOptions) {
  }

  pretty(size: number): string {

    const DEFAULT_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const DEFAULT_DIVISOR = 1000;
    const DEFAULT_SCALE = 1;

    size = size || 0;

    let units = this.options.units || DEFAULT_UNITS;
    let divisor = this.options.divisor || DEFAULT_DIVISOR;
    let scale = this.options.scale;
    //scale is [0,20]
    if (scale == null || scale < 0 || scale > 20) {
      //no error message
      scale = DEFAULT_SCALE;
    }

    let negative = size < 0;

    if (negative) {
      size = -size;
    }
    if (size < 1) {
      return (negative ? '-' : '') + size + units[0];
    }
    let exponent = Math.min(Math.floor(Math.log(size) / Math.log(divisor)), units.length - 1);
    size = Number(size / Math.pow(divisor, exponent));
    let unit = units[exponent];
    //remove tail 0 by parseFloat
    return (negative ? '-' : '') + parseFloat(size.toFixed(scale)) + unit
  }
}
