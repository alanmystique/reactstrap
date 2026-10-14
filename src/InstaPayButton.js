import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';

/**
 * Opt-in InstaPay DS 2.1 skin for the existing Reactstrap Button.
 * Import instapay/ds-2.1.css after Bootstrap's CSS.
 *
 * Figma: https://www.figma.com/design/1z3vwnijVhrhUoiKqHvdys/InstaPay-DS-2-0?node-id=132-1835
 */
function InstaPayButton({
  variant = 'primary',
  size = 'medium',
  iconOnly = false,
  startIcon,
  endIcon,
  className,
  children,
  tag,
  href,
  type,
  ...attributes
}) {
  const isNativeButton = !tag && !href;
  const content = iconOnly ? (
    <span className="ip-btn__icon" aria-hidden="true">
      {startIcon || endIcon || children}
    </span>
  ) : (
    <>
      {startIcon && (
        <span className="ip-btn__icon" aria-hidden="true">
          {startIcon}
        </span>
      )}
      {children && <span className="ip-btn__label">{children}</span>}
      {endIcon && (
        <span className="ip-btn__icon" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </>
  );

  return (
    <Button
      {...attributes}
      tag={tag}
      href={href}
      type={type || (isNativeButton ? 'button' : undefined)}
      color="primary"
      className={classNames(
        'ip-btn',
        `ip-btn--${variant}`,
        `ip-btn--${size}`,
        { 'ip-btn--icon-only': iconOnly },
        className,
      )}
    >
      {content}
    </Button>
  );
}

InstaPayButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']),
  iconOnly: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.elementType,
  href: PropTypes.string,
  type: PropTypes.string,
  /** Required for icon-only buttons; provide a descriptive accessible name. */
  'aria-label': PropTypes.string,
};

export default InstaPayButton;
