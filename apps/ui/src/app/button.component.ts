import { Component, HostBinding, Input } from '@angular/core';
import styles from '@libs/theme/button.module.css';

@Component({
  selector: 'button[appButton]',
  template: '<ng-content></ng-content>',
})
export class ButtonComponent {
  @Input()
  appearance = 'primary';

  @HostBinding('class')
  get classes(): string {
    return styles[this.appearance];
  }
}
