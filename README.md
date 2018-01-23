# angular-pretty-size
Angular library that converts bytes to a human readable string. 1189 to 1.2KB.


## Get Started

### Installation

You can install this package locally with npm.

```bash
# To get the latest stable version and update package.json file:
npm install angular-pretty-size --save
# or
yarn add angular-pretty-size
```

### <a name="usage"></a> Usage

After installing the library, import it in you module.

```typescript
import {PrettySizeModule} from 'angular-pretty-size';

// using default options
@NgModule({
    imports: [
        // ...
        PrettySizeModule
    ]
    //others
})
```
Use it in html.

```html
//directive
<nxt-pretty-size [size]="'1000'"></nxt-pretty-size>
//pipe
{{1000|nxtPrettySize}}
//or
<span [nxtPrettySize]="'1000'"></span>
```

Use service in your component.

```typescript
import {PrettySizeService} from 'angular-pretty-size';

export class TestComponent {
    testData: string;

    constructor(private prettySizeService: PrettySizeService) {
      this.testData = this.prettySizeService.pretty(10178);
    }
}
```

### Configuration

#### PrettySizeOptions

Optionaly, PrettySizeModule can be configured by passing PrettySizeOptions to the `forRoot` method of `PrettySizeModule`.

PrettySizeOptions default options is.

```typescript
export class PrettySizeOptions {
  units: string[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  divisor: number = 1000;
  scale: number = 1;
}
```

Make sure the units, divisor and scale is not empty.
As you can see, I added a space before each unit. 1024 bytes displayed as `10 KiB`.

```typescript
import {PrettySizeModule, PrettySizeOptions} from 'angular-pretty-size';

@NgModule({
    imports: [
        // make sure units,divisor and scale is not empty
        PrettySizeModule.forRoot({
            provide: PrettySizeOptions,
            useValue: {
                units: [' Byte', ' KiB', ' MiB', ' GiB', ' TiB', ' PiB', ' EiB', ' ZiB', ' YiB'],
                divisor: 1024,
                scale: 1, //scale is [0,20]
            },
        }),
    ]
    //others
})
```

## License
MIT.
