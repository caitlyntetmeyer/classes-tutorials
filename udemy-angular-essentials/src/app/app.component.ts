import { Component } from '@angular/core';

// Create your own HTML element using a decorator:
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // The title is of type "string":
  title = 'app';
  // aNumber: number;
}
