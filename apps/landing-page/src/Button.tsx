import { FunctionComponent } from 'react';
import styles from '@libs/theme/button.module.css';

export interface ButtonProps {
  children: any;
  appearance?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, appearance = 'primary' }) => (
  <button className={styles[appearance]}>{children}</button>
);