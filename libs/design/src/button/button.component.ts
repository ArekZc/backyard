import { Component } from '@angular/core';

@Component({
  selector: 'button[dgButton]',
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      color: black;
    }
  `]
})
export class ButtonComponent {}
