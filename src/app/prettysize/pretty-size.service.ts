import {Injectable} from '@angular/core';
import {PrettySizeOptions} from './pretty-size-options';

@Injectable()
export class PrettySizeService {

  constructor(private options: PrettySizeOptions) {
  }

  pretty(size: number): string {
    size = size || 0;

    let units = this.options.units;
    let divisor = this.options.divisor;
    let scale = this.options.scale;

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
