import * as React from 'react';
import { ButtonProps } from './Button';

export type InstaPayButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type InstaPayButtonSize = 'large' | 'medium' | 'small' | 'xsmall';

export interface InstaPayButtonProps extends Omit<ButtonProps, 'size' | 'color'> {
  variant?: InstaPayButtonVariant;
  size?: InstaPayButtonSize;
  /** Render a square button. An accessible aria-label is required. */
  iconOnly?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

declare class InstaPayButton extends React.Component<InstaPayButtonProps> {}
export default InstaPayButton;
