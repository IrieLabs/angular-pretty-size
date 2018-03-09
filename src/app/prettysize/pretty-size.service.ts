import {Injectable} from '@angular/core';
import {PrettySizeOptions} from './pretty-size-options';


@Injectable()
export class PrettySizeService {
  private units: string[];
  private divisor: number;
  private scale: number;

  constructor(private options: PrettySizeOptions) {
    const DEFAULT_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const DEFAULT_DIVISOR = 1000;
    this.units = this.options.units || DEFAULT_UNITS;
    this.divisor = this.options.divisor || DEFAULT_DIVISOR;
    this.scale = this.options.scale;
  }

  pretty(size: number): string {
    size = size || 0;
    let negative = size < 0;

    if (negative) {
      size = -size;
    }
    if (size < 1) {
      return (negative ? '-' : '') + size + this.units[0];
    }
    let exponent = Math.min(Math.floor(Math.log(size) / Math.log(this.divisor)), this.units.length - 1);
    size = Number(size / Math.pow(this.divisor, exponent));
    let unit = this.units[exponent];
    //remove tail 0 by parseFloat
    return (negative ? '-' : '') + parseFloat(size.toFixed(this.scale)) + unit
  }
}
