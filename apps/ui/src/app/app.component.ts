import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button dg-button>Click me!</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ui';
}
