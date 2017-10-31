import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  	<input type="text"
  		/* 

  		Event binding (listening for an event): (input)="onUserInput($event)" 
  		Property binding (passing data to element properties): [value]="name" 
  		Or, combine them with two-way data binding:

  		*/
  		[(ngModel="name")]>
  	// String interpolation (outputting text in a template):
    <p>Hello, {{ name }}!</p>
    <p>I'm the user component</p>
    `
})
export class UserComponent {
	name = 'Caitlyn';

	onUserInput(event) {
		this.name = event.target.value;
	}
}
