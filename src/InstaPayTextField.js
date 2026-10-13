import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from './Input';
import Label from './Label';

/**
 * InstaPay DS 2.1 opt-in text field. Reactstrap Input remains the native control.
 * Matches Figma Text Input 131:2126 / optical reference 514:420.
 *
 * Persistent labels are the default for financial and identity fields.
 * Import instapay/inputs.css after Bootstrap's CSS.
 */
function InstaPayTextField({
  id,
  label,
  hint,
  error,
  required = false,
  invalid = false,
  disabled = false,
  size = 'large',
  type = 'text',
  startIcon,
  endIcon,
  endAction,
  prefix,
  helperIcon,
  className,
  inputClassName,
  'aria-describedby': externalDescription,
  ...attributes
}) {
  const multiline = type === 'textarea';
  const hasError = Boolean(error) || invalid;
  const message = error || hint;
  const hasMessage = message !== undefined && message !== null && message !== '';
  const messageId = hasMessage ? `${id}-message` : undefined;
  const describedBy = [externalDescription, messageId].filter(Boolean).join(' ') || undefined;

  return (
    <div
      className={classNames(
        'ip-field',
        `ip-field--${size}`,
        { 'ip-field--invalid': hasError, 'ip-field--disabled': disabled },
        className,
      )}
    >
      {label != null && label !== '' && (
        <Label for={id} className="ip-field__label">
          {label}
          {required && <span className="ip-field__required" aria-hidden="true"> *</span>}
        </Label>
      )}
      <div className="ip-field__stack">
        <div
          className={classNames('ip-field__control', {
            'ip-field__control--leading': Boolean(startIcon) && !prefix,
            'ip-field__control--prefix': Boolean(prefix),
            'ip-field__control--multiline': multiline,
            'ip-field__control--invalid': hasError,
            'ip-field__control--disabled': disabled,
          })}
        >
          {prefix && <div className="ip-field__prefix">{prefix}</div>}
          {!prefix && startIcon && (
            <span className="ip-field__leading" aria-hidden="true">{startIcon}</span>
          )}
          <Input
            {...attributes}
            id={id}
            type={type}
            required={required}
            disabled={disabled}
            invalid={hasError}
            aria-describedby={describedBy}
            className={classNames('ip-field__input', inputClassName)}
          />
          {endIcon && <span className="ip-field__trailing" aria-hidden="true">{endIcon}</span>}
          {endAction && <span className="ip-field__action">{endAction}</span>}
        </div>
        {hasMessage && (
          <div
            id={messageId}
            className={classNames('ip-field__message', {
              'ip-field__message--error': hasError,
            })}
            role={hasError ? 'alert' : undefined}
          >
            {helperIcon && <span className="ip-field__helper-icon" aria-hidden="true">{helperIcon}</span>}
            <span>{message}</span>
          </div>
        )}
      </div>
    </div>
  );
}

InstaPayTextField.propTypes = {
  /** Stable ID linking the input, label and helper/error text. */
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  hint: PropTypes.node,
  error: PropTypes.node,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium']),
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'url', 'number', 'search', 'textarea']),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  /** Interactive adornment, e.g. an accessible password-visibility button. */
  endAction: PropTypes.node,
  /** Interactive country-code selector for a phone field; startIcon is ignored. */
  prefix: PropTypes.node,
  helperIcon: PropTypes.node,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  'aria-describedby': PropTypes.string,
};

export default InstaPayTextField;
