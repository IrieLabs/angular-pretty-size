import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pretty-size';
  testBytes = [10,10240,10178];
  testBytes2 = [722468864, 89238283];
}
