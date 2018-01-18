import {Component, Input, HostBinding} from '@angular/core';

import {PrettySizeService} from './pretty-size.service';

@Component({
  selector: 'nxt-pretty-size,[nxtPrettySize]',
  template: ''
})

export class PrettySizeComponent {
  @Input() size: number;

  constructor(private prettySizeService: PrettySizeService) {
  }

  @Input()
  set nxtPrettySize(value: number) {
    //how to deal with zero 0
    this.size = this.size || value;
  }

  @HostBinding()
  get innerText() {
    return this.prettySizeService.pretty(this.size);
  }
}
