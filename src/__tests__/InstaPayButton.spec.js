import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { InstaPayButton } from '..';

describe('InstaPayButton (DS 2.1)', () => {
  it('renders the primary medium style by default', () => {
    render(<InstaPayButton>Continue</InstaPayButton>);
    expect(screen.getByRole('button', { name: 'Continue' })).toHaveClass(
      'ip-btn',
      'ip-btn--primary',
      'ip-btn--medium',
      'btn',
    );
  });

  it('maps Figma variants and sizes without Bootstrap size classes', () => {
    render(
      <InstaPayButton variant="secondary" size="xsmall">
        Cancel
      </InstaPayButton>,
    );
    const button = screen.getByRole('button', { name: 'Cancel' });
    expect(button).toHaveClass('ip-btn--secondary', 'ip-btn--xsmall');
    expect(button).not.toHaveClass('btn-sm', 'btn-lg');
  });

  it('keeps icon-only accessible with aria-label', () => {
    render(
      <InstaPayButton iconOnly aria-label="Add payment" startIcon={<svg />}/>,
    );
    const button = screen.getByRole('button', { name: 'Add payment' });
    expect(button).toHaveClass('ip-btn--icon-only');
    expect(button.querySelector('.ip-btn__icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('keeps Reactstrap disabled behavior', () => {
    const onClick = jest.fn();
    render(
      <InstaPayButton variant="tertiary" disabled onClick={onClick}>
        Disabled
      </InstaPayButton>,
    );
    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
    user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('defaults to type button to avoid accidental form submission', () => {
    render(<InstaPayButton>Save</InstaPayButton>);
    expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('type', 'button');
  });

  it('preserves native submit and custom class names', () => {
    render(
      <InstaPayButton type="submit" className="my-class">
        Submit
      </InstaPayButton>,
    );
    expect(screen.getByRole('button', { name: 'Submit' })).toHaveClass('my-class');
    expect(screen.getByRole('button', { name: 'Submit' })).toHaveAttribute('type', 'submit');
  });
});
