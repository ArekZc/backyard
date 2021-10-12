import { FunctionComponent } from 'react';
import styles from '@libs/theme/buttonGroup.module.css';

export interface ButtonGroupProps {
  children: any
}

export const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({ children }) => (
  <div className={styles.buttonGroup}>
    {children}
  </div>
);
