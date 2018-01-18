import {Injectable} from '@angular/core';
import {PrettySizeOptions} from './pretty-size-options';

@Injectable()
export class PrettySizeService {

  constructor(private options: PrettySizeOptions) {
  }

  pretty(size: number): string {
    size = size || 0;

    let units = this.options.units;
    var divisor = this.options.divisor;
    var scale = this.options.scale;

    let negative = size < 0;

    if (negative) {
      size = -size;
    }
    if (size < 1) {
      return (negative ? '-' : '') + size + units[0];
    }
    var exponent = Math.min(Math.floor(Math.log(size) / Math.log(divisor)), units.length - 1);
    size = Number(size / Math.pow(divisor, exponent));
    var unit = units[exponent];

    if (size >= 10 || size % 1 === 0) {
      return (negative ? '-' : '') + size.toFixed(0) + unit
    }
    return (negative ? '-' : '') + size.toFixed(scale) + unit
  }
}
