import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>I'm from the user component (user.component.ts)!</p>
    <input type="text" [(ngModel)]="name">
    <p>Hello {{ name }}!</p>
    `
})
export class UserComponent {
	name = 'Caitlyn';

	onUserInput(event) {
		this.name = event.target.value;
	}
}
