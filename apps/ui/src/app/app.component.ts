import { Component, ViewEncapsulation } from '@angular/core';
import button from '@libs/theme/button.module.css';
import buttonGroup from '@libs/theme/buttonGroup.module.css';

@Component({
  selector: 'app-root',
  template: `
    <div [class]="styles.buttonGroup.buttonGroup">
      <button [class]="styles.button.primary">Click me</button>
      <button [class]="styles.button.primary">Click me</button>
      <button [class]="styles.button.primary">Click me</button>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  readonly styles = {
    buttonGroup,
    button
  }
}
