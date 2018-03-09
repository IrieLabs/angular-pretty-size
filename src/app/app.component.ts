import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  smallBytes = [10, 500, 1000, 1024, 1189];
  largeBytes = [100000, 102400, 622468864, 792382830, 892382830];
  hugeBytes = [1000000000, 1024000000, 7224688640, 8923828300, 18923828300000];
}
