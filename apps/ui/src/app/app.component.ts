import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button dgButton>{{ title }}</button>`,
  styles: [`
    :host {
      appearance: none;
    }
  `]
})
export class AppComponent {
  title = 'ui';
}
