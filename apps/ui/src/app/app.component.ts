import { Component, ViewEncapsulation } from '@angular/core';
import styles from './app.component.module.css';

@Component({
  selector: 'app-root',
  template: `
    <div class="theme-light" [ngClass]="[styles.container]">
      <app-button-group>
        <button appButton>Click me</button>
        <button appButton>Click me</button>
        <button appButton>Click me</button>
      </app-button-group>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  readonly styles = styles;
}
