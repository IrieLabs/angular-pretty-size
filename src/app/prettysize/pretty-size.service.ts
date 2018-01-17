import {Injectable} from '@angular/core';

@Injectable()
export class PrettySizeService {

  constructor() {

  }

  pretty(size: number): string {

    size = size | 0;

    let negative = size < 0;

    let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    if (negative) {
      size = -size;
    }
    if (size < 1) {
      return (negative ? '-' : '') + size + ' B'
    }
    var exponent = Math.min(Math.floor(Math.log(size) / Math.log(1000)), units.length - 1);
    size = Number(size / Math.pow(1000, exponent));
    var unit = units[exponent];

    if (size >= 10 || size % 1 === 0) {
      return (negative ? '-' : '') + size.toFixed(0) + ' ' + unit
    }
    return (negative ? '-' : '') + size.toFixed(1) + ' ' + unit
  }
}
