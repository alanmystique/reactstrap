import * as React from 'react';
import { InputProps } from './Input';

export type InstaPayTextFieldSize = 'large' | 'medium';
export type InstaPayTextFieldType =
  | 'text' | 'email' | 'password' | 'tel'
  | 'url' | 'number' | 'search' | 'textarea';

export interface InstaPayTextFieldProps
  extends Omit<InputProps, 'size' | 'bsSize' | 'type'> {
  /** Provide a stable ID for the input and its associated label and helper text. */
  id: string;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  size?: InstaPayTextFieldSize;
  type?: InstaPayTextFieldType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  /** An interactive adornment such as a show-password button. */
  endAction?: React.ReactNode;
  /** Prefix region, e.g. an interactive country-code selector. */
  prefix?: React.ReactNode;
  helperIcon?: React.ReactNode;
  inputClassName?: string;
}

declare class InstaPayTextField extends React.Component<InstaPayTextFieldProps> {}
export default InstaPayTextField;
