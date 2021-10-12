import { Component, HostBinding } from '@angular/core';
import styles from '@libs/theme/buttonGroup.module.css';

@Component({
  selector: 'app-button-group',
  template: '<ng-content></ng-content>',
})
export class ButtonGroupComponent {
  @HostBinding('class')
  get classes() {
    return styles.buttonGroup;
  }
}
